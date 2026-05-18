const express = require('express')
const router = express.Router()
const pool = require('../db')

// GET /collection — return all albums
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM collection ORDER BY added_at DESC'
    )
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch collection' })
  }
})

// POST /collection — add an album
router.post('/', async (req, res) => {
  const { discogs_id, title, artist, year, cover_url } = req.body
  if (!discogs_id || !title || !artist) {
    return res.status(400).json({ error: 'discogs_id, title, and artist are required' })
  }
  try {
    const { rows } = await pool.query(
      `INSERT INTO collection (discogs_id, title, artist, year, cover_url)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (discogs_id) DO NOTHING
       RETURNING *`,
      [discogs_id, title, artist, year ?? null, cover_url ?? null]
    )
    if (rows.length === 0) {
      return res.status(409).json({ error: 'Album already in collection' })
    }
    res.status(201).json(rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to add album' })
  }
})

// DELETE /collection/:discogs_id — remove an album
router.delete('/:discogs_id', async (req, res) => {
  const { discogs_id } = req.params
  try {
    const { rowCount } = await pool.query(
      'DELETE FROM collection WHERE discogs_id = $1',
      [discogs_id]
    )
    if (rowCount === 0) {
      return res.status(404).json({ error: 'Album not found' })
    }
    res.status(204).send()
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to remove album' })
  }
})

module.exports = router
