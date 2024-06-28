const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoutes = require('./routes/api');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// API routes
app.use('/api', apiRoutes);

// Serve the HTML files for each page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/movies.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/movies.html'));
});

app.get('/news.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/news.html'));
});

app.get('/logout.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/logout.html'));
});

app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/admin.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
