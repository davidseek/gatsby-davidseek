import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/Layouts/layout"
import About from '../components/About';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FullScreen from '../components/FullScreen';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <FullScreen sections={['#section-about', '#section-work', '#section-testimonials', '#section-contact']}
        onSectionStart={section => {
          if (section !== '#section-contact') {
            let footerElement = document.getElementById("footer-section");
            footerElement.onHide();
          }
        }}
        onSectionEnd={section => {
          if (section == '#section-contact') {
            let footerElement = document.getElementById("footer-section");
            footerElement.onDisplay();
          }
        }}>
        <About data={data.datoCmsAbout} />
        <Work data={data.allDatoCmsWork} />
        <Testimonials data={data.allDatoCmsTestimonial} />
        <Contact data={data.datoCmsForm} />
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