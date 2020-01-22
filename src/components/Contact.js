import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Contact = () => (
    <section className="section-contact">
        <div className="container">
            <h2>Contact David</h2>
            <form>
                <Row>
                    <Col lg={6}>
                        <input className="field" type="text" placeholder="Your Name*"></input>
                    </Col>
                    <Col lg={6}>
                        <input className="field" type="email" placeholder="Your Email*"></input>
                    </Col>
                    <Col lg={12}>
                        <textarea className="field" rows="4" placeholder="Your Message*"></textarea>
                    </Col>
                </Row>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
)

export default Contact
