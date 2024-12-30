import React from "react";
import ReactDOM from "react-dom/client";




// Header
//      Logo
//      Nav Item
// Body
//      Search
//      RestaurentCard
// footer
//      copyright 
//      link
//      Address
//      Contact

const heading=React.createElement("h1", {id:"heading"},"Vineet Tiwari");
console.log(heading);

const jsxHeading = <h1 id="heading">My Name is Vineet Tiwari</h1>
console.log(jsxHeading);
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
