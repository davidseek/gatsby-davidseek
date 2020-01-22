import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layouts/layout"
import About from '../components/About';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const IndexPage = ({ data }) => (
  <Layout>
    <About/>
    <Work/>
    <Testimonials/>
    <Contact/>
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
