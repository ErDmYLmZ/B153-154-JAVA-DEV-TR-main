import React from "react";
import Skill from "./skill";
import "./style.css"

const Skills = () => {
  return (
    <div className="skills">
      <div className="row">
        <Skill name="Photoshop" value="90" />
        <Skill name="Illustrator" value="80" />
        <Skill name="Indesign" value="45" />
        <Skill name="Corel Draw" value="60" />
      </div>
    </div>
  );
};

export default Skills;
