const express = require('express');
const router = express.Router();
const Name = require('./models/name');
const Specialization = require('./models/specialization');

// Rota para criar um novo nome
router.post('/names', async (req, res) => {
  try {
    const { name } = req.body;
    const newName = await Name.create({ name });
    res.status(201).json(newName);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para criar uma nova especialização
router.post('/specializations', async (req, res) => {
  try {
    const { name } = req.body;
    const newSpecialization = await Specialization.create({ name });
    res.status(201).json(newSpecialization);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
