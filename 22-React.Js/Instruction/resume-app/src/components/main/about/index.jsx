import React from "react";
import SectionHeader from "../common/section-header";
import Intro from "./intro";
import Skills from "./skills";

const About = () => {
  return (
    <section id="about" className="about">
      <SectionHeader title="About Me" isResumeDownload={true} />
      <Intro />
      <Skills />
    </section>
  );
};

export default About;
