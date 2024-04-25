import React from "react";
import "./style.css"

const Testimonal = ({image, name, message}) => {
  return (
    <div className="item">
      <div className="row">
        <div className="col-md-2 col-sm-2 hidden-xs">
          <div className="thumb">
            <img
              src={`assets/images/${image}`}
              alt="testimonial-customer"
            />
          </div>
        </div>
        <div className="text col-md-10 col-sm-10 col-xs-12">
          <p>{message}</p>
          <span className="author">- {name} -</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
