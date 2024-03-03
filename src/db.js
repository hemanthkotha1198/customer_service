
// Import required modules
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// Create an Express application
const app = express();
const port = 3000; // Specify the port for your server
app.use(cors());
// Database connection configuration
const pool = new Pool({
  user: 'postgres',
  password: 'root@123',
  host: 'localhost',
  port: 5432,
  database: 'zithara_db',
});

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to fetch records from the database
app.get('/api/records', async (req, res) => {
  try {
    // Query to fetch records from the database
    const query = 'SELECT * FROM customer';
    const { rows } = await pool.query(query);

    // Send the fetched records as JSON response
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




