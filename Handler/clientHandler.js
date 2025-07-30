const pool = require('../db/db');

// Get all clients
const getClients = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients ORDER BY id LIMIT 100');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one client
const getClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM clients WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Client not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new client
const createClient = async (req, res) => {
  const {
    age, job, marital, education, default_status, balance,
    housing, loan, contact, day, month, duration, campaign,
    pdays, previous, poutcome, y
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO clients (
        age, job, marital, education, default_status, balance,
        housing, loan, contact, day, month, duration, campaign,
        pdays, previous, poutcome, y
      ) VALUES (
        $1, $2, $3, $4, $5, $6,
        $7, $8, $9, $10, $11, $12, $13,
        $14, $15, $16, $17
      ) RETURNING *`,
      [
        age, job, marital, education, default_status, balance,
        housing, loan, contact, day, month, duration, campaign,
        pdays, previous, poutcome, y
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a client
const updateClient = async (req, res) => {
  const { id } = req.params;
  const {
    age, job, marital, education, default_status, balance,
    housing, loan, contact, day, month, duration, campaign,
    pdays, previous, poutcome, y
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE clients SET
        age=$1, job=$2, marital=$3, education=$4, default_status=$5,
        balance=$6, housing=$7, loan=$8, contact=$9, day=$10,
        month=$11, duration=$12, campaign=$13, pdays=$14,
        previous=$15, poutcome=$16, y=$17, last_modified=NOW()
      WHERE id=$18 RETURNING *`,
      [
        age, job, marital, education, default_status, balance,
        housing, loan, contact, day, month, duration, campaign,
        pdays, previous, poutcome, y, id
      ]
    );

    if (result.rows.length === 0) return res.status(404).json({ error: 'Client not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete client
const deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM clients WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Client not found' });
    res.json({ message: 'Client deleted', deleted: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
