import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { Row, Col } from 'react-bootstrap';

const Header = ({ email, mainMenu }) => {

    const saveCurrentSection = (section) => {
        localStorage.setItem('currentSection', section);
    }

    return (
        <section className="section-layout">
            <div className="nav-header">
                <div className="container">

                    <Row>
                        <Col lg={3} className="nav-contact">
                            <div>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                        </Col>
                        <Col lg={9} className="nav-menus">
                            <div className="nav-main-menu">
                                <ul>
                                    {mainMenu.menuItems.map((menu, index) => (
                                        <li key={index} > <Link to={menu.url} smooth={true} duration={500}
                                            onClick={e => { saveCurrentSection(menu.url) }}>{menu.title}
                                        </Link>
                                        </li>
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
