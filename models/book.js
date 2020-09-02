const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: { 
        type: String 
    },
    title: { 
        type: String, 
        required: true 
    },
    authors: { 
        type: [String], 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true
    },
    link: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('Book', bookSchema);