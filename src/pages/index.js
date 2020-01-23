import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layouts/layout"
import About from '../components/About';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { SectionsContainer } from 'react-fullpage';

const IndexPage = ({ data }) => {
  let options = {
    activeClass: 'active', // the class that is appended to the sections links
    anchors: ['section-about', 'section-work', 'section-testimonials', 'section-contact'], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    className: 'SectionContainer', // the class name for the section container
    delay: 500, // the scroll animation speed
    navigation: false, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: 'Section', // the section class name
    sectionPaddingTop: '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign: false, // align the content of each section vertical
  };

  useEffect(() => {
    // $('#demo').betterScroll();

  }, []);

  return (
    <Layout>
      {/* <div style={{overflow:'hidden'}}>
        <SectionsContainer {...options}> */}
          <About data={data.datoCmsAbout} />
          <Work data={data.allDatoCmsWork} />
          <Testimonials data={data.allDatoCmsTestimonial} />
          <Contact data={data.datoCmsForm} />
        {/* </SectionsContainer> */}
      {/* </div> */}
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