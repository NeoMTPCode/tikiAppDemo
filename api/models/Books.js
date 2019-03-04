const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, author: {
        type: String,
        required: true,
    }
});

const Books = mongoose.model('books', BooksSchema);

module.exports = Books;