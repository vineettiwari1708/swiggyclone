import RestaurentCard from "./RestaurantCard";
import resObj from "../../utils/data";
const Body = () => {
   const res =  resObj.map((item) => (
        <RestaurentCard key={item.info.resId} resData={item} /> 
      ))
  return (
    <div className="body">
      <div className="search">
        <h3>Search:</h3>
      </div>
      <div className="filter"><button className="filter-btn">Top Rated Restaurants</button></div>
      <div className="res-container">
        {res}
      </div>
    </div>
  );
};

export default Body;
