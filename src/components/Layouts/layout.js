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
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            email
            copyright
          }
          datoCmsMenu(name:{eq:"Main menu"}) {
            menuItems {
              title
              url
            }
          }
        }
      `}
      render={data => (
        // <div className={`container`}>
        <React.Fragment>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}>
            <link href={"https://fonts.googleapis.com/css?family=Raleway&display=swap"} rel="stylesheet"></link>
            <script src="https://kit.fontawesome.com/d3d6f2df1f.js" crossorigin="anonymous"></script>
          </HelmetDatoCms>
          <Header email={data.datoCmsHome.email} mainMenu={data.datoCmsMenu} />
          {children}
          <Footer copyright={data.datoCmsHome.copyright} />
        </React.Fragment>
        // </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
