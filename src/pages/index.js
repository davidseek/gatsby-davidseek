import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsiveWorkPortfolio = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

const responsiveTestimonials = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

const testimonials = [
  {
    testimonial: '"David is good to work with and he delivers a good quality, complete solution: App + Backend. David challenged my assumptions and the outcome was a better App."',
    client: 'Hugo Schot',
    work_type: 'FREELANCING PROJECT'
  }
]

const IndexPage = ({ data }) => (
  <Layout>
    <section className="section-about">
      <div className="container">
        <h1 className="h1-b">David Seek</h1>
        <h2 className="h2-b">Full Stack / iOS App Developer</h2>
        <div className="about-social-links">
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </section>
    <section className="section-work">
      <Carousel
        responsive={responsiveWorkPortfolio}
        infinite={true}
        ssr={false}
        removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
      >
        {workPortfolio.map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.image} />
          </div>
        ))}
      </Carousel>
    </section>
    <section className="section-testimonials">
      <div className="container">
        <Carousel
          responsive={responsiveTestimonials}
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
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query IndexQuery {
//     allDatoCmsWork(sort: { fields: [position], order: ASC }) {
//       edges {
//         node {
//           id
//           title
//           slug
//           excerpt
//           coverImage {
//             fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
//               ...GatsbyDatoCmsSizes
//             }
//           }
//         }
//       }
//     }
//   }
// `
