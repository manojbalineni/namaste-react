//Step -1 : Create an element.
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World from React!"
);

console.log(heading); // Object

//Step-2 : Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Step -3 : Render the created element to the root
root.render(heading);
