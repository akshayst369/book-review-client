const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const authenticateToken = require('../middleware/authMiddleware');

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// GET single book (for modal)
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Book not found' });
  }
});

// POST add review (Protected route)
router.post('/:bookId/review', authenticateToken, async (req, res) => {
  const { review } = req.body;
  try {
    const book = await Book.findById(req.params.bookId);
    book.reviews.push(review);
    await book.save();
    res.json({ message: 'Review added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add review' });
  }
});

module.exports = router;
