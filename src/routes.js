const express = require('express');
const router = express.Router();
const getCategoryResponse = require('./data/getCategoryResponse');


router.get('/tasks', (req, res) => {
  res.status(500).json({
    error: 'No category specified'
  });
});

router.get('/tasks/:category', (req, res) => {
  const { category='' } = req.params;
  const response = getCategoryResponse(category);
  res.status(response.status).send(response);
});

router.get('/', (req, res) => {
  res.status(500).send('Nothing to see here.');
});

module.exports = router;
