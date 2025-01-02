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
//      config driven ui

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
const resObj = [
  {
    type: "restaurant",
    info: {
      resId: 18574816,
      name: "Orchid - Fortune Park BBD",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/18574816/aed2384851acb9f4a68dbad8e2f5dd15_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/18574816/aed2384851acb9f4a68dbad8e2f5dd15_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/18574816/a2ad0976c5c49155cc10654d66be5349_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "320",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "220",
            reviewTextSmall: "220 Reviews",
            subtext: "220 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "100",
            reviewTextSmall: "100 Reviews",
            subtext: "100 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.0",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.0",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.0",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹2,000 for two",
      },
      cfo: {
        text: "₹800 for one",
      },
      locality: {
        name: "Fortune Park BBD, Lucknow",
        address: "Ranapratap Marg, Hazratganj, Lucknow",
        localityUrl: "lucknow/restaurants/in/fortune-park-bbd",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/oriental/",
          name: "Oriental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,000 for two",
      },
    },
    order: [],
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/orchid-fortune-park-bbd-hazratganj/info",
      clickActionDeeplink: "",
    },
    distance: "4.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18574816","element_type":"listing","rank":82}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20595886,
      name: "Buttercup Bungalow",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/20595886/f9c5c153af4bcace11aac264b7252e9a_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/20595886/f9c5c153af4bcace11aac264b7252e9a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/801183/69b2131f81277ab16ee887f53f6103c8_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "712",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.1",
            reviewCount: "63",
            reviewTextSmall: "63 Reviews",
            subtext: "63 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "649",
            reviewTextSmall: "649 Reviews",
            subtext: "649 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.3",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.3",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.3",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹1,200 for two",
      },
      cfo: {
        text: "₹500 for one",
      },
      locality: {
        name: "Gomti Nagar, Lucknow",
        address: "2/86, Vijay Khand, Zone 15, Gomti Nagar, Lucknow",
        localityUrl: "lucknow/gomti-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/health-food/",
          name: "Healthy Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,200 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/buttercup-bungalow-2-gomti-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "283 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20595886","element_type":"listing","rank":83}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 800168,
      name: "The Ritz Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/800168/815945ae3e3a19d2af137fd95e887158_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/8/800168/815945ae3e3a19d2af137fd95e887158_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/800168/7582698988c5cf009eb02ea68721343b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,644",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.6",
            reviewCount: "204",
            reviewTextSmall: "204 Reviews",
            subtext: "204 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "1,440",
            reviewTextSmall: "1,440 Reviews",
            subtext: "1,440 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹900 for two",
      },
      cfo: {
        text: "₹400 for one",
      },
      locality: {
        name: "Mahanagar, Lucknow",
        address: "M 19, Gole Market, Mahanagar, Lucknow",
        localityUrl: "lucknow/mahanagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/oriental/",
          name: "Oriental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹900 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/the-ritz-restaurant-mahanagar/info",
      clickActionDeeplink: "",
    },
    distance: "4.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"800168","element_type":"listing","rank":84}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20856116,
      name: "Lucknowi Thaath",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/20856116/9e70c7d5c068492620eac0aceac36eb7_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/20856116/9e70c7d5c068492620eac0aceac36eb7_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/20856116/46d8e09bd78abb24fccab91b255da146_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "395",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "14",
            reviewTextSmall: "14 Reviews",
            subtext: "14 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "381",
            reviewTextSmall: "381 Reviews",
            subtext: "381 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.0",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.9",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.9",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹1,400 for two",
      },
      cfo: {
        text: "₹600 for one",
      },
      locality: {
        name: "Gomti Nagar, Lucknow",
        address: "2/884, Sahid Bagat Singh, Gomti Nagar, Lucknow",
        localityUrl: "lucknow/gomti-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/cafes/",
          name: "Cafe",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/rolls/",
          name: "Rolls",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,400 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/lucknowi-thaath-1-gomti-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20856116","element_type":"listing","rank":85}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 801170,
      name: "Spice Caves",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/801170/d405fcde8f00a60e4d90f5f4b8f91642_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/0/801170/d405fcde8f00a60e4d90f5f4b8f91642_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/801170/9163bc06a253b3b252bf69c047a7b1ef_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "8,815",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "2,938",
            reviewTextSmall: "2,938 Reviews",
            subtext: "2,938 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "5,877",
            reviewTextSmall: "5,877 Reviews",
            subtext: "5,877 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.6",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.6",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹1,700 for two",
      },
      cfo: {
        text: "₹700 for one",
      },
      locality: {
        name: "Gomti Nagar, Lucknow",
        address: "4/293, Vivek Khand 2, Gomti Nagar, Lucknow",
        localityUrl: "lucknow/gomti-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTkzXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/bbq/",
          name: "BBQ",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/sichuan/",
          name: "Sichuan",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/ice-cream/",
          name: "Ice Cream",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,700 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/spicecaves/info",
      clickActionDeeplink: "",
    },
    distance: "268 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"801170","element_type":"listing","rank":86}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19745341,
      name: "Cafe Coffee Tree",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/19745341/c4faa55b694844262a8a4d896d821ab4_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/1/19745341/c4faa55b694844262a8a4d896d821ab4_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/19745341/81f24baf5d3d8294940dd604acc572d1_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "0",
        rating_text: "-",
        rating_subtitle: "Not rated",
        rating_color: "CBCBCB",
        votes: "5",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "3",
            reviewTextSmall: "3 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "2",
            reviewTextSmall: "2 Reviews",
            subtext: "Not enough Delivery Reviews",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "grey",
                    tint: "500",
                  },
                  rating: "0.0",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "grey",
                    tint: "500",
                  },
                  rating: "0.0",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "grey",
                    tint: "500",
                  },
                  rating: "0.0",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "grey",
                  tint: "050",
                },
                borderColor: {
                  type: "grey",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Gomti Nagar, Lucknow",
        address:
          "Second Floor, Phoenix Market City, Sector 7, Gomti Nagar Extension, Gomti Nagar, Lucknow",
        localityUrl: "lucknow/gomti-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/cafes/",
          name: "Cafe",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/ice-cream/",
          name: "Ice Cream",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹400 for two",
      },
    },
    order: [],
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/cafe-coffee-tree-gomti-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "5.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19745341","element_type":"listing","rank":87}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 21457783,
      name: "Divineats Restaurant & Banquet",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/21457783/47cb5b5006b1018a492c6a8f2c2f1932_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/21457783/47cb5b5006b1018a492c6a8f2c2f1932_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/21457783/1e1792474b4643d7ddd3d9d79675db68_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.3",
        rating_text: "3.3",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "12",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "3",
            reviewTextSmall: "3 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "9",
            reviewTextSmall: "9 Reviews",
            subtext: "Not enough Delivery Reviews",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "grey",
                    tint: "500",
                  },
                  rating: "0.0",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "grey",
                    tint: "500",
                  },
                  rating: "0.0",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "grey",
                    tint: "500",
                  },
                  rating: "0.0",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "grey",
                  tint: "050",
                },
                borderColor: {
                  type: "grey",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹1,000 for two",
      },
      cfo: {
        text: "₹400 for one",
      },
      locality: {
        name: "Gomti Nagar, Lucknow",
        address: "2/5/10, Vinamra Khand, Gomti Nagar, Lucknow",
        localityUrl: "lucknow/gomti-nagar-restaurants",
      },
      timing: {
        text: "Closes in 1 hour 24 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/sichuan/",
          name: "Sichuan",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,000 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/divineats-restaurant-banquet-gomti-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21457783","element_type":"listing","rank":88}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20013423,
      name: "Kake Di Hatti",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/20013423/ae141e807f60820d94fde4a21a32af0b_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/20013423/ae141e807f60820d94fde4a21a32af0b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/20013423/37750871991fc4a1dfb8c9013cab2498_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,901",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "314",
            reviewTextSmall: "314 Reviews",
            subtext: "314 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "1,587",
            reviewTextSmall: "1,587 Reviews",
            subtext: "1,587 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.8",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.7",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.7",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹950 for two",
      },
      cfo: {
        text: "₹400 for one",
      },
      locality: {
        name: "Gomti Nagar, Lucknow",
        address:
          "Shop 11, Ground Floor, Urbanac Business Park, Vibhuti Khand, Gomti Nagar, Lucknow",
        localityUrl: "lucknow/gomti-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹950 for two",
      },
    },
    order: [],
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/kake-di-hatti-gomti-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "1.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20013423","element_type":"listing","rank":89}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 21229822,
      name: "House Of Caffeine",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/21229822/11074cb101ba6eeca377a3b18b38ecaa_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/2/21229822/11074cb101ba6eeca377a3b18b38ecaa_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/21229822/a39329fa41a4a1a32caad1c10edfaaa7_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "8",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "8",
            reviewTextSmall: "8 Reviews",
            subtext: "8 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Not enough Delivery Reviews",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "grey",
                  tint: "050",
                },
                borderColor: {
                  type: "grey",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹750 for two",
      },
      cfo: {
        text: "₹300 for one",
      },
      locality: {
        name: "Gomti Nagar, Lucknow",
        address: "C15, Kisan Bazar, Vibhuti Khand, Gomti Nagar, Lucknow",
        localityUrl: "lucknow/gomti-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/cafes/",
          name: "Cafe",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹750 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/house-of-caffeine-gomti-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "1.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21229822","element_type":"listing","rank":90}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 801155,
      name: "Nainital Momos",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/801155/1611049ffc62c776bfe2bfe76764a4bd_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/801155/1611049ffc62c776bfe2bfe76764a4bd_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/801155/b2912eb5dc6c71c748a3252c1ca04855_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "12.3K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "1,474",
            reviewTextSmall: "1,474 Reviews",
            subtext: "1,474 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "10.8K",
            reviewTextSmall: "10.8K Reviews",
            subtext: "10.8K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "4.0",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Gomti Nagar, Lucknow",
        address: "1/340, Viram Khand, Gomti Nagar, Lucknow",
        localityUrl: "lucknow/gomti-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/momos/",
          name: "Momos",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/health-food/",
          name: "Healthy Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹400 for two",
      },
    },
    order: [],
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/nainital-momos-gomti-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"801155","element_type":"listing","rank":91}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 800934,
      name: "Urban Turban - The Metropolitan Club",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/800934/9fe837520a34d6d618aafb6c2c290ece_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/800934/9fe837520a34d6d618aafb6c2c290ece_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/800934/e177e64ae1f719160c8d53a504237cec_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,132",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "570",
            reviewTextSmall: "570 Reviews",
            subtext: "570 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "1,562",
            reviewTextSmall: "1,562 Reviews",
            subtext: "1,562 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹2,500 for two",
      },
      cfo: {
        text: "₹1,000 for one",
      },
      locality: {
        name: "Metropolitan Club, Gomti Nagar, Lucknow",
        address:
          "CP 134, Viraj Khand, Near Sahara Hospital, Gomti Nagar, Lucknow",
        localityUrl: "lucknow/restaurants/in/metropolitan-clubs-gomti-nagar",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,500 for two",
      },
    },
    order: [],
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/urban-turban-the-metropolitan-club-gomti-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"800934","element_type":"listing","rank":92}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20738585,
      name: "WOW! China",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20738585/955badf4eb42af41d1920915dd402725_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/20738585/955badf4eb42af41d1920915dd402725_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20738585/e90fd15b3c83529d00d6a64d8a68445e_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "747",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "184",
            reviewTextSmall: "184 Reviews",
            subtext: "184 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "563",
            reviewTextSmall: "563 Reviews",
            subtext: "563 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.9",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.8",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.6",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹700 for two",
      },
      cfo: {
        text: "₹300 for one",
      },
      locality: {
        name: "Gomti Nagar, Lucknow",
        address:
          "FC-04, Plot 22, 3rd Floor, Crown Mall, Opposite BBD College, Gomti Nagar, Lucknow",
        localityUrl: "lucknow/gomti-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/oriental/",
          name: "Oriental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/lucknow/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          url: "https://www.zomato.com/lucknow/restaurants/sichuan/",
          name: "Sichuan",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/lucknow/restaurants/sea-food/",
          name: "Seafood",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹700 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/lucknow/wow-china-gomti-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "6.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"4ad151d1-9301-4c23-bc5d-09ef93e91b52","location_type":"delivery_cell","location_id":"4151160861311893504","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20738585","element_type":"listing","rank":93}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h3>Search</h3>
      </div>
      <div className="res-container">
        {resObj.map((item) => (
          <RestaurentCard resData={item} />           // config driven ui
        ))}
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
