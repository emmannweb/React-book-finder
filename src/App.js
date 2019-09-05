import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Book from "./components/Book";

// import propTypes from "prop-types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Books: [],
      Query: "javascript"
    };
    console.log(this.state.Query);
  }

  search = () => {
    let query = this.state.Query;
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    fetch(`${BASE_URL}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(`Request rejected with status ${response.status}`);
        }
      })
      .then(result => this.setState({ Books: result.items }))
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.search();
  }

  changeSearch(e) {
    if (e.target.value === "") {
      this.setState({ Query: "javascript" }, this.search);
    } else {
      this.setState({ Query: e.target.value }, this.search);
    }
  }

  render() {
    // const { Books } = this.state;
    console.log(this.state.Query);

    const { Books, Query } = this.state;
    // let bookJavascript = this.state.Query;
    let FilterBooks = Books.filter(filterBook =>
      filterBook.volumeInfo.title.toLowerCase().includes(Query.toLowerCase())
    );

    // console.log(filterBook));

    //

    return (
      <div className="App">
        <Header />
        <div className="searchClass">
          <input
            className="search__input"
            type="search"
            placeholder={this.state.Query}
            // onChange={this.handleText.bind(this)}
            onChange={this.changeSearch.bind(this)}
          />

          {/* 
          <div className="md-form form-lg">
            <input
              type="search"
              id="inputLGEx"
              className="form-control form-control-lg"
              onChange={this.changeSearch.bind(this)}
            />
            <label htmlFor="inputLGEx">Find your book</label>
          </div> */}
        </div>

        <Book Books={FilterBooks} />
      </div>
    );
  }
}

export default App;
