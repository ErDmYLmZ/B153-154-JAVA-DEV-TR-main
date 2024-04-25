import React from 'react'
import SectionHeader from '../common/section-header'
import ExperienceItem from '../common/experience/experience-item'

const Experiences = () => {
  return (

    <section id="experience" className="resume">
        <SectionHeader title="Experience"/>
        <div className="row">
          <ExperienceItem isTopItem={true} title="Orchid Inc" subTitle="CREATIVE DIRECTOR | JANUARY, 2013 - PRESENT" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maxime laborum sequi, magni earum quo soluta sint velit numquam, ipsum illum! Nostrum possimus illo architecto"/>
          <ExperienceItem title="VISUAL / UI DESIGNER" subTitle="CREATIVE DIRECTOR | MARCH'11 - DECEMBER'12" desc="orem ipsum dolor sit amet, consectetur adipisicing elit. Odit maxime laborum sequi, magni earum quo soluta sint velit numquam."/>
          <ExperienceItem title="Click Media" subTitle="SENIOR UX DESIGNER | JULY'09 - APRIL'11" desc="Odit maxime laborum sequi, magni earum quo soluta sint velit numquam, ipsum illum! Nostrum possimus illo architecto praesentium ut aliquam dolorem."/>
        </div>
    </section>

        
  )
}

export default Experiences