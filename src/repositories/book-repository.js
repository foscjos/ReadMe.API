const Book = require('../models/book');
const ReadPreference = require('mongodb').ReadPreference;

require('../mongo').connect();

function getBooks(req, res) {
    const docquery = Book.find({}).read(ReadPreference.NEAREST);
    docquery
        .exec()
        .then(books => {
            res.json(books);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

function createBook(req, res) {
    const { id, title, author } = req.body;

    const book = new Book({ id, title, author });

    book.save().then(() => {
        res.json(book);
    }).catch(err => {
        res.status(500).send(err);
    });
}

module.exports = { getBooks, createBook };