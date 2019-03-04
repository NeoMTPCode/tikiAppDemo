const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Books = require('./models/Books');
const validateBookInput = require('./validation/book');

const PORT = 4000;
const mongoUri = "mongodb://mongo2:27017/tiki";

mongoose.connect(mongoUri, { useNewUrlParser: true }).then(() => { console.log('DATABASE IS CONNECTED'); });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('hello');
});
app.get('/api/books', function(req, res){
    Books.find({}, function(err, books){
        if (err) return console.log(err);
        res.send(books);
    });
});
app.get('/api/book/:id', function(req, res){
    Books.findOne({_id: req.params.id}, function(err, book){
        if (err) return console.log(err);
        res.send(book);
    });
});
app.post('/api/books/create', function(req, res){
    const { errors, isValid } = validateBookInput(req.body);
    if(!isValid) {
        return res.status(400).send(errors);
    }
    Books.create({name: req.body.name, author: req.body.author}, function(err, book){
        if (err) return console.log(err);
        res.send(book);
    });
});
app.put('/api/book', function(req, res){
    Books.updateOne({_id: req.body._id},{name: req.body.name, author: req.body.author}, function(err, book){
        if (err) return console.log(err);
        res.send(book);
    });
});
app.put('/api/books/delete', function(req, res){
    Books.remove({_id: req.body.id}, function(err){
        if (err) return console.log(err);
        res.send({});
    });
});
app.listen(PORT, () => {
    console.log('Server is running ON PORT: ' + PORT);
});