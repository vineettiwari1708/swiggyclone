import RestaurentCard from "./RestaurantCard";
  const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <h3>Search</h3>
        </div>
        <div className="res-container">
          {resObj.map((item) => (
            <RestaurentCard key={item.info.resId} resData={item} />           // config driven ui (key should be unique but not index this is bad practice)
          ))}
        </div>
      </div>
    );
  };

  export default Body;