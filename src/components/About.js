import React from 'react'
import { Section } from 'react-fullpage';
import { Element } from 'react-scroll';

const About = ({ data }) => (
    <Element name="#section-about">
        <section className="section-about">
            <div className="container">
                <div className="container">
                    {data && (
                        <React.Fragment>
                            <h1 className="h1-b">{data.title}</h1>
                            <h2 className="h2-b">{data.subtitle}</h2>
                            <div className="about-social-links">
                                {data.socialLinks.map((socialLink, index) => (
                                    <a key={index} href={socialLink.url}><i className={socialLink.fontAwesomeIcon}></i></a>
                                ))}
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </section>
    </Element>
)

export default About
