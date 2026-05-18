CREATE TABLE IF NOT EXISTS collection (
  id          SERIAL PRIMARY KEY,
  discogs_id  INTEGER NOT NULL UNIQUE,
  title       TEXT    NOT NULL,
  artist      TEXT    NOT NULL,
  year        INTEGER,
  cover_url   TEXT,
  added_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
