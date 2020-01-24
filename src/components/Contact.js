import React, { useState, useEffect } from 'react'
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Element } from 'react-scroll';
import axios from 'axios';

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setISubmitted] = useState(false);
    const [onError, setOnError] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOnError(false);
        setIsSubmitting(true);
        try {
            const response = await axios.post(
                'https://us-central1-firenspec.cloudfunctions.net/davidseekMailRequest',
                {
                    name: values.name || '',
                    mail: values.email || '',
                    message: values.message || ''
                },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            if (response.data.success) {
                setISubmitted(true);
            }
        } catch (error) {
            console.log(error)
            setOnError(true);
        }
        setIsSubmitting(false)
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
                                            value={values[inputField.name] || ''}
                                            inputField={inputField}
                                            handleOnChange={handleOnChange} />
                                    </Col>
                                ))}
                            </Row>
                            {isSubmitted && <Alert variant="success">Message sent</Alert>}
                            {onError && <Alert variant="danger">Something went wrong!</Alert>}

                            <button type="submit">{isSubmitting && <Spinner animation="border" size="sm" />}  {data.submitText}</button>
                        </form>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Contact
