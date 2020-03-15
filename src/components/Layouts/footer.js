import React, { useEffect, useState } from "react";
import { Col, Row } from 'react-bootstrap';

const Footer = ({ copyright }) => {

    const [displayFooter, setDisplayFooter] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById('footer-section');
        footerElement.onDisplay = function () {
            setDisplayFooter(true);
        };
        footerElement.onHide = function () {
            setDisplayFooter(false);
        }
    }, [])

    return (
        <section className={`section-layout footer-section ${displayFooter ? 'active ' : ''}`}
            id="footer-section">
            {/* <div className=""> */}
            <div className="container">
                <Row>
                    <Col lg={12}>
                        <p>{copyright}</p>
                    </Col>
                </Row>
            </div>
            {/* </div> */}
        </section>
    );
};

Footer.propTypes = {
};

export default Footer;
