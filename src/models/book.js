const mongoose = require('mongoose');
const { Schema } = mongoose;

const Arthor = new Schema({
    name: String,
    email: String
});

const Book = new Schema({
    title: String,
    authors: [Author],
    publishedDate: Date,
    price: Number,
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});