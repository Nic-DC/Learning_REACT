// import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"; // importing bootstrap <css & js>
import WarningSign from "./components/WarningSign";

function App() {
  return (
    <div>
      <WarningSign color="danger" />
    </div>
  );
}

export default App;

// 1. Create a component called WarningSign which receives a string as a prop.
//    This text should be presented inside an Alert react-bootstrap component of type danger.

// 2. Create a component called MyBadge which receives a string of text and a color as props.
//    This component should render a Badge component with those properties.

// 3. Create a SingleBook component as a function. The component receives a book object as a prop,
//    and displays the cover and the title of the book.
//    Use react-bootstrap Cards to display a book (the book object can be read from one of the .json files we gave you yesterday).

// 4. Create a BookList component. This component receives by props a list of books and displays them using the SingleBook component.

// 5. Create a filterBookList function. By writing into an input field a search query,
//    the BookList should show only the books containing the specified string into the title
//    (hint: save the query into the BookList component state and filter the books accordingly).

// 6. Convert your SingleBook component to a class, and create its state containing a selected boolean property.

// 7. Clicking on a SingleBook should toggle its selected state property. If the selected property is true,
// the SingleBook should have some styling that reflects that state change, visually.
