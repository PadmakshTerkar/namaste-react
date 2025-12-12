import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", {id : "parent"},
    React.createElement("div", {id : "child"},[
        React.createElement("h1", {}, "Namaste React"),
        React.createElement("h2", {}, "I am h2 tag")
    ])
)


const heading = React.createElement("h1", {id : "heading", xyz :"abc"}, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

root.render(parent);

// console.log(heading);