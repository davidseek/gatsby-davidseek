import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { Row, Col } from 'react-bootstrap';

const Header = () => {

    return (
        <div className="nav-header">
            <Row>
                <Col lg={3} className="nav-contact">
                    <div>
                        <p>developer@daviseek.com</p>
                    </div>
                </Col>
                <Col lg={9} className="nav-menus">
                    <div className="nav-main-menu">
                        <ul>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Work</Link></li>
                            <li><Link to="#">Testimonials</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

Header.propTypes = {
};

export default Header;
