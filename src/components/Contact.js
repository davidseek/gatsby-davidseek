import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Section } from 'react-fullpage';
import { Element } from 'react-scroll';

const RenderInputType = ({ value, inputField, handleOnChange }) => {
    switch (inputField.inputType) {
        case 'text':
        case 'email':
            return <input
                className="field"
                name={inputField.name}
                type={inputField.inputType}
                value={value}
                onChange={handleOnChange}
                placeholder={inputField.placeholder} required={inputField.required} />
        case 'textarea':
            return <textarea
                className="field"
                name={inputField.name}
                rows="4"
                value={value}
                onChange={handleOnChange}
                placeholder={inputField.placeholder} required={inputField.required} />
        default: return null;
    }
}

const Contact = ({ data }) => {

    const [values, setValues] = useState({})

    useEffect(() => {
        let tempValues = {}
        data.inputFields.map(inputField => {
            tempValues = {
                ...tempValues,
                [inputField.name]: ''
            }
        });
        setValues(tempValues);
    }, []);

    const handleOnChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    return (
        <Element className="#section-contact">
            <section className="section-contact center-section">
                <div className="container">
                    <div className="container">
                        <h2>Contact David</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                {data.inputFields.map((inputField, index) => (
                                    <Col lg={inputField.col} key={index}>
                                        <RenderInputType
                                            value={values[inputField.name]}
                                            inputField={inputField}
                                            handleOnChange={handleOnChange} />
                                    </Col>
                                ))}
                                {/* <Col lg={6}>
                        <input className="field" type="text" placeholder="Your Name*"></input>
                    </Col>
                    <Col lg={6}>
                        <input className="field" type="email" placeholder="Your Email*"></input>
                    </Col>
                    <Col lg={12}>
                        <textarea className="field" rows="4" placeholder="Your Message*"></textarea>
                    </Col> */}
                            </Row>
                            <button type="submit">{data.submitText}</button>
                        </form>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Contact
