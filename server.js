const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Initialize SQLite database
const dbPath = path.join(__dirname, 'leaderboard.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS leaderboard (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    score INTEGER NOT NULL,
    difficulty TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);
});

// Get leaderboard
app.get('/api/leaderboard', (req, res) => {
  const { difficulty } = req.query;

  if (!difficulty) {
    return res.status(400).json({ error: 'Difficulty parameter is required.' });
  }

  db.all(
    'SELECT name, score, created_at FROM leaderboard WHERE difficulty = ? ORDER BY score DESC, created_at ASC LIMIT 10',
    [difficulty],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    }
  );
});

// Post new score
app.post('/api/leaderboard', (req, res) => {
  const { name, score, difficulty } = req.body;
  if (!name || typeof score !== 'number' || !difficulty) {
    return res.status(400).json({ error: 'Name, score, and difficulty are required.' });
  }
  db.run('INSERT INTO leaderboard (name, score, difficulty) VALUES (?, ?, ?)', [name, score, difficulty], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, name, score, difficulty });
  });
});

app.listen(PORT, () => {
  console.log(`Leaderboard server running on http://localhost:${PORT}`);
}); 