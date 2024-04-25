import React from "react";
import students from "./Students.json";
import Kisi from "./kisi";

const Kisiler = () => {
  return (
    <div className="st-container">
      {students.map((student, index) => (
        <Kisi student={student} key={index} index={index} />
      ))}
    </div>
  );
};

export default Kisiler;
