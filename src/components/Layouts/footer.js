import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { Row, Col } from 'react-bootstrap';

const Footer = ({copyright}) => {

    return (
        <div className="footer-section">
            <Row>
                <Col lg={12}>
                    <p>{copyright}</p>
                </Col>
            </Row>
        </div>
    );
};

Footer.propTypes = {
};

export default Footer;
