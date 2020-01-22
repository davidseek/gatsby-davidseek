import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
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
        responsive={responsive}
        infinite={true}
        ssr={false}
        removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
      >

        <div style={{ background: 'gray' }}>
          <p>Test</p>
        </div>

        <div style={{ background: 'gray' }}>
          <p>Test</p>
        </div>

        <div style={{ background: 'gray' }}>
          <p>Test</p>
        </div>

        <div style={{ background: 'gray' }}>
          <p>Test</p>
        </div>

        <div style={{ background: 'gray' }}>
          <p>Test</p>
        </div>

      </Carousel>
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
