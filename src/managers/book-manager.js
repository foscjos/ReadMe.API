const bookRepo = require('../repositories/book-repository');

function getBooks(req, res) {
    bookRepo.getBooks(req, res);
};

function createBook(req, res) {
    // here we could add some logic to sanitize data
    bookRepo.createBook(req, res);
}

module.exports = { getBooks, createBook };