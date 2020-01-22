import React from 'react'
import Img from 'gatsby-image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const workPortfolio = [
    {
        image: 'https://image.freepik.com/free-vector/orange-polygon-background_1407-134.jpg'
    },
    {
        image: 'https://image.freepik.com/free-photo/abstract-color-powder-explosion-white-background-freeze-motion-dust-splash_36326-1805.jpg'
    },
    {
        image: 'http://getwallpapers.com/wallpaper/full/5/b/d/143174.jpg'
    },
    {
        image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/abstract-color-wave-kathy-kurtz.jpg'
    },
    {
        image: 'https://images.freecreatives.com/wp-content/uploads/2016/04/Download-Abstract-Color-Background.jpg'
    }
];

const Work = ({data}) => (
    <section className="section-work">
        <Carousel
            responsive={responsiveCarousel}
            infinite={true}
            ssr={false}
            removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
        >
            {data.edges.map((work, index) => (
                <div key={index} className="work-item">
                    <div className="work-overlay"/>
                    <Img fluid={work.node.coverImage.fluid}/>
                    <i className={work.node.fontAwesomeIcon}></i>
                </div>
            ))}
        </Carousel>
    </section>
)

export default Work
