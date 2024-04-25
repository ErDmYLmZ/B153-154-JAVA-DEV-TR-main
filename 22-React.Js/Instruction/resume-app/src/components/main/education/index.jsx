import React from 'react'
import SectionHeader from '../common/section-header'
import ExperienceItem from '../common/experience/experience-item'

const Education = () => {
  return (

    <section id="education" className="resume">
        <SectionHeader title="Education"/>
        <div className="row">
          <ExperienceItem  isTopItem={true}  title="Master Degree Of Design" subTitle="JANUARY, 2007" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maxime laborum sequi, magni earum quo soluta sint velit numquam, ipsum illum! Nostrum possimus illo architecto"/>
          <ExperienceItem title="VBachelor Of Arts" subTitle="JUNE, 2004" desc="orem ipsum dolor sit amet, consectetur adipisicing elit. Odit maxime laborum sequi, magni earum quo soluta sint velit numquam."/>
          <ExperienceItem title="Master Degree Of Design" subTitle="ANUARY, 2001" desc="Odit maxime laborum sequi, magni earum quo soluta sint velit numquam, ipsum illum! Nostrum possimus illo architecto praesentium ut aliquam dolorem."/>
        </div>
    </section>

        
  )
}

export default Education