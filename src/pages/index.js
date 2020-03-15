import { graphql } from 'gatsby';
import React from 'react';
import About from '../components/About';
import FullScreen from '../components/FullScreen';
import Layout from "../components/Layouts/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <FullScreen sections={['#section-about', '#section-work', '#section-testimonials', '#section-contact']}>
        <About data={data.datoCmsAbout} />
      </FullScreen>
    </Layout>
  )
}

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
          url
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
    allDatoCmsTestimonial {
      edges {
        node {
          testimonial
          client
          workType
        }
      }
    }
    datoCmsForm(name:{eq:"Contact David"}) {
      name
      inputFields {
        name
        inputType
        placeholder
        required
        col
      }
      submitText
    }
  }
`