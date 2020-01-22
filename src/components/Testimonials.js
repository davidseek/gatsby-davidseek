import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsiveCarousel = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const testimonials = [
    {
        testimonial: '"David is good to work with and he delivers a good quality, complete solution: App + Backend. David challenged my assumptions and the outcome was a better App."',
        client: 'Hugo Schot',
        work_type: 'FREELANCING PROJECT'
    }
]

const Testimonials = () => (
    <section className="section-testimonials">
        <div className="container">
            <Carousel
                responsive={responsiveCarousel}
                infinite={true}
                ssr={false}
                removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
                showDots={true}
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <h2 className="testimonial-item-description h2-b">{testimonial.testimonial}</h2>
                        <h4 className="testimonial-item-client">{testimonial.client}</h4>
                        <p className="testimonial-item-worktype">{testimonial.work_type}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    </section>
)

export default Testimonials
