import React from "react";
import "./style.css"

const ExperienceItem = ({title, subTitle, desc, isTopItem=false}) => {
  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className={`${isTopItem ? "top-item" : ""} resume-item`}>
        <h2>{title}</h2>
        <span>{subTitle}</span>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
