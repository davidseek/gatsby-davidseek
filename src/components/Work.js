import React from 'react'
import Img from 'gatsby-image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Section } from 'react-fullpage';

const responsiveCarousel = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Work = ({ data }) => (
        <section className="section-work">
            <Carousel
                responsive={responsiveCarousel}
                infinite={true}
                ssr={false}
                removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
            >
                {data && data.edges.map((work, index) => (
                    <div key={index} className="work-item">
                        <div className="work-overlay" />
                        <Img fluid={work.node.coverImage.fluid} />
                        <i className={work.node.fontAwesomeIcon}></i>
                    </div>
                ))}
            </Carousel>
        </section>
)

export default Work
