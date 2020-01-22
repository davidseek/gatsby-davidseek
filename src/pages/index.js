import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layouts/layout"
import About from '../components/About';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const IndexPage = ({ data }) => (
  <Layout>
    <About data={data.datoCmsAbout}/>
    <Work data={data.allDatoCmsWork}/>
    <Testimonials/>
    <Contact/>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsAbout {
      title
      subtitle
      socialLinks {
        alt
        fontAwesomeIcon
        url
      }
    }
    allDatoCmsWork {
      edges {
        node {
          id
          fontAwesomeIcon
          coverImage {
            fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
// coverImage {
//   fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
//     ...GatsbyDatoCmsSizes
//   }
// }