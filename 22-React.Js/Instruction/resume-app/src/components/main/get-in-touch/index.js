import React from 'react'
import ContactForm from './contact-form';
import "./style.css"
import SectionHeader from '../common/section-header';
const GetInTouch = () => {
  return (
    <section id="contact" className="contact">
        <SectionHeader title="Get In Touch" />

        <ContactForm/>
    </section>
  )
}

export default GetInTouch