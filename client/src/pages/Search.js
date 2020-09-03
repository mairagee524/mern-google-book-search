import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/SeachForm";
import Book from "../components/OneBook";
// import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/BookList";

class Search extends Component {

    // instatiate state for list of books retrieved from googlebooks api and bookSearch value
    state = {
        books: [],
        q: "",
        message: "Search For A Book To Begin!"
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({ [name]: value })
    };

    getAllBooks = () => {
        API.getAllBooks(this.state.q)
        .then(res =>
            this.setState({
                books: res.data
            })
        )
        .catch(() =>
            this.setState({
                books: [],
                message: "Sorry, no books found! Try another query"
            })
        );
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get book update the books state
        event.preventDefault();

        // calls googlebooks api and returns searched book when search button is clicked
        API.searchBooks(this.state.q)
            .then(res => 
                this.setState({ books: res.data.items }) 
            )
            .catch(err => console.log(err))
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
        console.log(book);
    
        API.goSaveBook({
          title: book.volumeInfo.title,
          link: book.volumeInfo.infoLink,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail,
        })
    };
    
    render() {
        console.log(this.state.books);
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>(React) Google Books Search</strong>
                            </h1>
                            <h2 className="text-center">Search for and Save Books of Interest.</h2>
                        </Jumbotron>
                    </Col>

                    <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title ? book.volumeInfo.title : ""}
                      link={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : ""}
                      authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : ""}
                      description={book.volumeInfo.description ? book.volumeInfo.description : ""}
                      image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    );
  }
}

export default Search;