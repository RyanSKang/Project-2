const express = require('express');
const router = express.Router();
const Review = require('../../models/Review');

// GET route for displaying the reviews page
router.get('/', (req, res) => {
  res.render('reviews', { title: 'Movie Reviews' });
});

// POST route
router.post("/", async (req, res) => {
  console.log(req.body);
  const newReview = await Review.create(req.body)
  res.json(newReview);
});

module.exports = router;
