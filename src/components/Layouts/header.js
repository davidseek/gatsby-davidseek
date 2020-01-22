import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { Row, Col } from 'react-bootstrap';

const Header = ({email,mainMenu}) => {

    return (
        <div className="nav-header">
            <Row>
                <Col lg={3} className="nav-contact">
                    <div>
                        <p>{email}</p>
                    </div>
                </Col>
                <Col lg={9} className="nav-menus">
                    <div className="nav-main-menu">
                        <ul>
                            {mainMenu.menuItems.map((menu,index) => (
                                <li key={index}><Link to={menu.url}>{menu.title}</Link></li>
                            ))}
                            {/* <li><Link to="#">About</Link></li>
                            <li><Link to="#">Work</Link></li>
                            <li><Link to="#">Testimonials</Link></li>
                            <li><Link to="#">Contact</Link></li> */}
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
