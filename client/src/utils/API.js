import axios from "axios";

const URL = "https://www.googleapis.com/books/v1/volumes?maxResults=10&q=";

export default {
    // Search for books from the Google API
  searchBooks: q => {
    console.log(q);
    return axios.get(URL + q);
  },
  // Gets all saved books
  getAllBooks: function() {
    return axios.get("api/books");

    // return axios.get("http://localhost:3000/api/books");
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },

  
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  goSaveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};