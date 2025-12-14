import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = (
    <h1 className="title" tabIndex="1">
      Hello World from React Element
    </h1>
 
);

//React functional component    
//Component composition
const HeadingComponent = () => (
    <div id="container">
    {Title}
      <h1 className="heading" tabIndex="5">
        Hello World from React Functional Component
      </h1>
    </div>
  );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);