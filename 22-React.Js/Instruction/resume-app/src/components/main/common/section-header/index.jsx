import React from "react";
import "./style.css"
const SectionHeader = ({ title, isResumeDownload = false }) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {isResumeDownload && (
        <a
          href="#"
          className="resume-download"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Download"
        >
          <i className="fa fa-download" aria-hidden="true">
            {" "}
          </i>{" "}
          Download Resume
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
