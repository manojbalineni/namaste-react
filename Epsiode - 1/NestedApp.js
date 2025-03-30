/**
 * <div id = "parent">
 * <div id = "child">
 * <h1></h1>
 * <h2></h2>
 * </div>
 * <div id = "child"2>
 * <h1></h1>
 * <h2></h2>
 * </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "This is an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "This is an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
