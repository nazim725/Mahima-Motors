import React, { useState, useEffect } from "react";
import Review from "../../../Home/Review/Review/Review";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./AllReview.css";

const AllReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://mahima-motors-server.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);
  return (
    <div
      style={{
        background: 'url("https://wallpaperaccess.com/full/4129330.jpg")',
        marginTop: "-30px",
        paddingBottom: "20px",
      }}
    >
      <div className="reviews-container">
        <h3 className="Products-heading"> Products Reviews</h3>
        <div className="All-review">
          {reviews.map((review) => (
            <ReviewItem key={review._id} review={review}></ReviewItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReview;
