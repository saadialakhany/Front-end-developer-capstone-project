import React from "react";
import customerPhotoOne from "../images/person-1.jpg";
import customerPhotoTwo from "../images/person-2.jpg";
import customerPhotoThree from "../images/person-3.jpg";
import customerPhotoFour from "../images/person-4.jpg";
import { FaStar } from "react-icons/fa";

function ContentBox({ rating, picture, name }) {
  return (
    <div className="content-container">
      <div className="content-header">
        <h3>Rating</h3>
        <p>
          {rating}
          <span>
            <FaStar />
          </span>
        </p>
      </div>
      <div className="content-main">
        <img
          src={picture}
          alt="Customer Photo of little lemon resturant"
          width={100}
          height={100}
        />
        <h3>{name}</h3>
      </div>
      <p className="content--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut
        diam ut massa consequat facilisis ut sit amet ante. Nunc dapibus, tortor
        eget mollis consectetur.
      </p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials--header">
        <h1>Testimonials</h1>
      </div>
      <div className="testimonials--body">
        <ContentBox
          rating={9}
          picture={customerPhotoOne}
          name="Alison Richard"
        />
        <ContentBox rating={10} picture={customerPhotoTwo} name="Elizebeth" />
        <ContentBox rating={8} picture={customerPhotoThree} name="Austin" />
        <ContentBox
          rating={9}
          picture={customerPhotoFour}
          name="Steven Cliperd"
        />
      </div>
    </section>
  );
}

export default Testimonials;
