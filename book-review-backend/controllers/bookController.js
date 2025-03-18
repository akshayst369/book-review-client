// controllers/bookController.js
const Book = require('../models/Book');

const addReview = async (req, res) => {
  const { bookId, review } = req.body;
  try {
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    book.reviews.push({ user: req.user.userId, review });
    await book.save();
    res.status(201).json({ message: 'Review added' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add review' });
  }
};

module.exports = { addReview };
