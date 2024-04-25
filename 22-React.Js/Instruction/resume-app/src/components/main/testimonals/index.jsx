import React from 'react'
import SectionHeader from '../common/section-header'
import Testimonal from './testimonal'

const Testimonals = () => {
  return (
    <section id="testimonials" class="testimonials">
        <SectionHeader title="Testimonals"/>

        <div class="testimonial-carousel">
            <Testimonal name="John Doe" image="testimonial-img1.jpg" message="Pri diam soluta molestie at, id melius ponderum mel, nominavi adipisci partiendo per te. No usu doctus dolorem liberavisse, vim nusquam invidunt id."/>
            <Testimonal name="John Doe" image="testimonial-img2.jpg" message="Pri diam soluta molestie at, id melius ponderum mel, nominavi adipisci partiendo per te. No usu doctus dolorem liberavisse, vim nusquam invidunt id."/>
            <Testimonal name="John Doe" image="testimonial-img3.jpg" message="Pri diam soluta molestie at, id melius ponderum mel, nominavi adipisci partiendo per te. No usu doctus dolorem liberavisse, vim nusquam invidunt id."/>
        </div>

    </section>
  )
}

export default Testimonals