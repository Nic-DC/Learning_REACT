import SingleBook from "./SingleBook";
import { Component } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="search book"
                value={this.state.searchQuery}
                onChange={(e) => {
                  this.setState({ searchQuery: e.target.value });
                  console.log("the searchQuery state is: ", this.state.searchQuery);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.state.searchQuery &&
            this.props.fantasyBooks
              .filter((search) => search.title.toLowerCase().includes(this.state.searchQuery))
              .map((fBook) => (
                <Col xs={3}>
                  <SingleBook fantasyBook={fBook} />
                </Col>
              ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
