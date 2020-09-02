const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const googleBookRouter = require('./routes/api')

const app = express();
const PORT = 3000 || process.env.PORT; 

if (app.get('env') === 'development') { require('dotenv').config(); }


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
  
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {res.send('Hello World!')});

// Add routes
app.use('/api', googleBookRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));