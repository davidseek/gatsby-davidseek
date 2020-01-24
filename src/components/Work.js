import React from 'react'
import Img from 'gatsby-image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Element } from 'react-scroll';

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
    <Element name="#section-work">
        <section className="section-work center-section">
            <div className="container">
                <Carousel
                    responsive={responsiveCarousel}
                    infinite={true}
                    ssr={false}
                    removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
                >
                    {data && data.edges.map((work, index) => (
                        <div key={index} className="work-item">
                            <div className="work-overlay" />
                            {/* <Img fluid={work.node.coverImage.fluid} /> */}
                            <img src={work.node.coverImage.fluid.src}
                                srcSet={work.node.coverImage.fluid.srcSet} />
                            <i className={work.node.fontAwesomeIcon}></i>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    </Element>
)

export default Work
