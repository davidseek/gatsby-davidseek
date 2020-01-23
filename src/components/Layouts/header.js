import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { Row, Col } from 'react-bootstrap';

const Header = ({ email, mainMenu }) => {

    return (
        <section className="section-layout">
            <div className="container">
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
                                    {mainMenu.menuItems.map((menu, index) => (
                                        <li key={index}><a href={menu.url}>{menu.title}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
};

Header.propTypes = {
};

export default Header;
