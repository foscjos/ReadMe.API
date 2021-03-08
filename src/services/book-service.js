const router = require('express').Router();
const bookManager = require('../managers/book-manager');

router.get('/books', (req, res) => {
    bookManager.getBooks(req, res);
});

router.post('/books/create', (req, res) => {
    // here we could do some validation to see if the user has permissions to create books
    bookManager.createBook(req, res);
});

module.exports = router;