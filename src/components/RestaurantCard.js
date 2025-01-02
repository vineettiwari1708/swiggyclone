import resObj from "../../utils/data";
const RestaurentCard = (props) => {
    const { resData } = props;
    //   const {url,name,cuisine,rating_text} = resData?.data;      //optional chaining
    return (
      <div className="res-card">
        <img className="res-logo" alt="res-logo" src={resData.info.image.url} />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisine.map((item) => `${item.name}, `)}</h4>
        <h4>{resData.info.rating.rating_text} stars</h4>
        <h4>{resData.gold.instant} mins</h4>
      </div>
    );
  };
  

  export default RestaurentCard;