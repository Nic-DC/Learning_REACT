import { Card } from "react-bootstrap";
import { Component } from "react";
import MyBadge from "./MyBadge";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        onClick={() => {
          this.setState({ selected: !this.state.selected });
          console.log("the selected is now: ", this.state.selected);
        }}
        style={{
          border: this.state.selected ? "5px solid black" : "none",
        }}
      >
        <Card.Img
          variant="top"
          src={this.props.fantasyBook.img}
          className="single-card-img"
          style={{ height: "350px" }}
        />
        <Card.Body>
          <Card.Title className="line-clamp">{this.props.fantasyBook.title}</Card.Title>
          <Card.Text>
            <MyBadge text={this.props.fantasyBook.category} color="warning" className="mr-3" />
            <MyBadge text={this.props.fantasyBook.asin} color="secondary" />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
