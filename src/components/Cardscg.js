import React from "react";
// import { Link } from "react-router-dom";

const Cardscg = ({ title }) => {
  return (
    <div className="cardscg">
      <h1>{title}</h1>
      {/* <Link to={`/Shop/?cg=${title}`} className="ShopNowcg"> */}
    
      <p className="ShopNowcg">Shop Now</p>

      {/* </Link> */}
    </div>
  );
};

export default Cardscg;
