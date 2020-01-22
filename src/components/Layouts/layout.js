import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Header from "./header";
import Footer from "./footer";

const TemplateWrapper = ({ children }) => {

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
        }
      `}
      render={data => (
        <div className={`container`}>
          {/* <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          /> */}
          <HelmetDatoCms>
            <script src="https://kit.fontawesome.com/d3d6f2df1f.js" crossorigin="anonymous"></script>
          </HelmetDatoCms>
          <Header />
          {children}
          <Footer/>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
