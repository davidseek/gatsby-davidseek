import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layouts/layout"
import About from '../components/About';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
// import { SectionsContainer } from 'react-fullpage';
import { useSwipeable, Swipeable } from 'react-swipeable'
import FullScreen from '../components/FullScreen';

const IndexPage = ({ data }) => {
  // let options = {
  //   activeClass: 'active', // the class that is appended to the sections links
  //   anchors: ['section-about', 'section-work', 'section-testimonials', 'section-contact'], // the anchors for each sections
  //   arrowNavigation: true, // use arrow keys
  //   className: 'SectionContainer', // the class name for the section container
  //   delay: 500, // the scroll animation speed
  //   navigation: false, // use dots navigatio
  //   scrollBar: false, // use the browser default scrollbar
  //   sectionClassName: 'Section', // the section class name
  //   sectionPaddingTop: '0', // the section top padding
  //   sectionPaddingBottom: '0', // the section bottom padding
  //   verticalAlign: false, // align the content of each section vertical
  // };

  // const [state, setState] = useState({
  //   sections: [],
  //   offset: 0,
  //   currentPage: 0,
  // });
  // const handlers = useSwipeable({ onSwiped: (eventData) => { } })


  // let SectionContainer = null;
  // let cssSectionContainer = { transform: `translate3d(0,${state.offset}px,0)` };
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   SectionContainer = document.getElementById('SectionContainer');
  //   const gapSectionContailer = SectionContainer.getBoundingClientRect().top;
  //   let tempSections = []
  //   SectionContainer.childNodes.forEach(childNode => {
  //     tempSections.push(childNode.getBoundingClientRect().top - gapSectionContailer)
  //   });
  //   // console.log(tempSections)
  //   setState({
  //     ...state,
  //     sections: tempSections
  //   })
  // }, []);

  // const scrollDetected = (e) => {
  //   // (HTMLElement) SectionContainer.
  //   const maxPages = state.sections.length;
  //   let currentPage = state.currentPage;
  //   if (e.nativeEvent.wheelDelta > 0) { // UP
  //     currentPage = state.currentPage - 1 >= 0 ? state.currentPage - 1 : state.currentPage;
  //   } else { // DOWN
  //     currentPage = state.currentPage + 1 < maxPages ? state.currentPage + 1 : state.currentPage;
  //   }
  //   setState({ ...state, currentPage: currentPage, offset: -state.sections[currentPage] })
  // }

  // const onSwipedUp = (e) => {
  //   const maxPages = state.sections.length;
  //   let currentPage = state.currentPage;
  //   currentPage = state.currentPage + 1 < maxPages ? state.currentPage + 1 : state.currentPage;
  //   setState({ ...state, currentPage: currentPage, offset: -state.sections[currentPage] })
  // }

  // const onSwipedDown = (e) => {
  //   let currentPage = state.currentPage;
  //   currentPage = state.currentPage - 1 >= 0 ? state.currentPage - 1 : state.currentPage;
  //   setState({ ...state, currentPage: currentPage, offset: -state.sections[currentPage] })
  // }

  return (
    <Layout>
      {/* <div style={{overflow:'hidden'}}>
        <SectionsContainer {...options}> */}
      {/* <Swipeable onSwipedDown={onSwipedDown} onSwipedUp={onSwipedUp}>
        <div className="SectionContainer" id="SectionContainer" style={cssSectionContainer} */}
      {/* onWheel={scrollDetected}> */}
      <FullScreen>
        <About data={data.datoCmsAbout} />
        <Work data={data.allDatoCmsWork} />
        <Testimonials data={data.allDatoCmsTestimonial} />
        <Contact data={data.datoCmsForm} />
      </FullScreen>
      {/* </div>
      </Swipeable> */}
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