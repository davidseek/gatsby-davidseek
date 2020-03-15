import React from "react";
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-scroll";

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
                                <a href={`mailto:${email}`} target="_blank">{email}</a>
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
