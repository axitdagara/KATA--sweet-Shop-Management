const express = require('express');
const router = express.Router();
const db = require('../db/mysql');

// Get all
router.get('/sweets', (req, res) => {
  db.query('SELECT * FROM sweets', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add
router.post('/sweets', (req, res) => {
  const { name, category, price, quantity } = req.body;
  db.query('INSERT INTO sweets (name, category, price, quantity) VALUES (?, ?, ?, ?)', 
    [name, category, price, quantity], 
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId });
  });
});

// Update
router.put('/sweets/:id', (req, res) => {
  const { name, category, price, quantity } = req.body;
  db.query('UPDATE sweets SET name=?, category=?, price=?, quantity=? WHERE id=?', 
    [name, category, price, quantity, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
  });
});

// Delete
router.delete('/sweets/:id', (req, res) => {
  db.query('DELETE FROM sweets WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});
router.post('/sweets', async (req, res) => {
  const { name, category, price, quantity } = req.body;
  const query = 'INSERT INTO sweets (name, category, price, quantity) VALUES (?, ?, ?, ?)';
  try {
    await db.query(query, [name, category, price, quantity]);
    res.status(200).send({ message: 'Sweet added' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


module.exports = router;
