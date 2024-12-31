import React from "react";
import ReactDOM from "react-dom/client";

// Header
//      Logo
//      Nav Item
// Body
//      Search
//      RestaurentCard
//          img, name, star rating, cuisine etc.
// footer
//      copyright
//      link
//      Address
//      Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo">WSL</div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurentCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/8d5d8f49-22b5-47ec-ab3b-7bcfc7a256ec_637321.jpg"
      />
      <h3>Pizza Hut</h3>
      <h4>Pizzas</h4>
      <h4>4.2 stars</h4>
      <h4>30-32 mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};

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
