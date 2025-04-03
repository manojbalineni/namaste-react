//Step -1 : Create an element.
// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello World from React!"
// );

import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 className="head" tabIndex={1}>
    Hello World from JSX
  </h1>
);

const name = "Manoj Babu Balineni";

const FooterComponent = () => (
  <div className="footer">
    {HeadingComponent()}
    <h1>This is a functional Component without return </h1>
  </div>
);

const HeadingComponent = () => {
  return (
    <h1 className="Heading-1">
      Hello from the functional Componet with Return
    </h1>
  );
};

console.log(heading); // Object

//Step-2 : Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Step -3 : Render the created element to the root
root.render(<FooterComponent />);
