import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Section } from 'react-fullpage';
import { Element } from 'react-scroll';

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

const Testimonials = ({ data }) => (
    <Element className="#section-testimonials">
        <section className="section-testimonials center-section">
            <div className="container">
                <div className="container">
                    <Carousel
                        responsive={responsiveCarousel}
                        infinite={true}
                        ssr={false}
                        removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
                        showDots={true}
                    >
                        {data && data.edges.map((testimonial, index) => (
                            <div key={index} className="testimonial-item">
                                <h2 className="testimonial-item-description h2-b">{testimonial.node.testimonial}</h2>
                                <h4 className="testimonial-item-client">{testimonial.node.client}</h4>
                                <p className="testimonial-item-worktype">{testimonial.node.workType}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    </Element>
)

export default Testimonials
