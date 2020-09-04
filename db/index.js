const mongoose = require('mongoose');
const models = require("../models");


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googleBookSearch', 
  { 
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)
.catch(e => {
  console.error('Connection error', e.message)
})

const db = mongoose.connection;

const bookSeed = [
    {
      authors: ["Suzanne Collins"],
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
      title: "The Hunger Games"
    }
];

// models.Book
// .remove({})
// .then(() => models.Book.collection.insertMany(bookSeed))
// .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
// })
// .catch(err => {
//     console.error(err);
//     process.exit(1);
// });
  

module.exports = db;