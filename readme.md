# Music Search Using React and Discogs API
![alt text](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
**Overview:** The idea here is that, despite there being lots of apps for tracking digital media, there seems to be very little in the way of keeping track of what *physical* media one owns, e.g. vinyl. This app will allow you to keep track of the different physical albums you own, in case you find yourself in a vinyl store and want a mobile reference of all the albums you currently own to take the guesswork out of purchasing further physical media.

## Running the Backend

The `backend/` directory contains an Express/PostgreSQL service that persists your collection.

### Setup

1. Copy the example env file and fill in your PostgreSQL connection string:
   ```bash
   cp backend/.env.example backend/.env
   ```

2. Run the migration to create the `collection` table (one time only):
   ```bash
   psql $DATABASE_URL -f backend/db/migration.sql
   ```

3. Start the backend server:
   ```bash
   cd backend && npm install && npm run dev
   ```

The server listens on port `3001` by default. The frontend dev server (Vite) runs on port `5173` — CORS is pre-configured for that origin.