import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
// const heading=React.createElement("h1", {id:"heading"},"Vineet Tiwari");
// console.log(heading);

// const jsxHeading = <h1 id="heading">My Name is Vineet Tiwari</h1>
// console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
