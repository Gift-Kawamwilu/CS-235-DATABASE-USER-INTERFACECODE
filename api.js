const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all movies
router.get('/movies', (req, res) => {
    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            console.error('Error fetching movies:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

// Get all rented movies
router.get('/rented-movies', (req, res) => {
    db.query('SELECT * FROM rented_movies', (err, results) => {
        if (err) {
            console.error('Error fetching rented movies:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

// Rent a movie
router.post('/rent-movie', (req, res) => {
    const { movie_id, user_id, rented_date, return_date } = req.body;
    const sql = 'INSERT INTO rented_movies (movie_id, user_id, rented_date, return_date) VALUES (?, ?, ?, ?)';
    db.query(sql, [movie_id, user_id, rented_date, return_date], (err, result) => {
        if (err) {
            console.error('Error renting movie:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(201).json({ message: 'Movie rented successfully', id: result.insertId });
    });
});

module.exports = router;
