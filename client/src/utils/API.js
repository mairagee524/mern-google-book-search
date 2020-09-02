import axios from "axios";

const URL = "https://www.googleapis.com/books/v1/volumes?maxResults=10&q=";

export default {
    // Search for books
  searchBooks: query => {
    return axios.get(URL + query);
  },
  // Gets all books
  getAllBooks: function() {
    return axios.get("http://localhost:3000/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};