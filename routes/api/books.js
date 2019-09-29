const express = require('express');
//use router part of express object
const router = express.Router();

//item model
const Book = require('../../models/book');

//route GET request api/books: get all items
router.get('/', (req, res) => {
 Book.find()
  .sort({ name: -1  })
  .then(books => res.json(books));
});

// POST api/books
router.post('/', (req, res) => {
  const newBook = new Book({
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    image: req.body.image
  });
  newBook.save().then(book => res.json(book));
});

module.exports = router;