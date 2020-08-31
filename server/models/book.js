const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true
    },
    link: { 
        type: Date, 
        required: true 
    }
});

module.exports = mongoose.model('books', bookSchema);

//equal to...
// const EmployDirect = mongoose.model("employees", EmployeeSchema);

// module.exports = EmployDirect;