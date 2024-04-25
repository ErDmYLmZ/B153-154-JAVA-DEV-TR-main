import React from "react";

const Skill = ({name, value}) => {
  return (
    <div className="col-md-6 col-sm-6 col-xs-12 item">
      <div className="skill-info clearfix">
        <h3 className="pull-left">{name}</h3>
        <span className="pull-right">{value}%</span>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
