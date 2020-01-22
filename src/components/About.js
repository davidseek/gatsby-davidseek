import React from 'react'

const About = ({ data }) => (
    <section className="section-about">
        <div className="container">
            <h1 className="h1-b">{data.title}</h1>
            <h2 className="h2-b">{data.subtitle}</h2>
            <div className="about-social-links">
                {data.socialLinks.map((socialLink, index) => (
                    <a key={index} href={socialLink.url}><i className={socialLink.fontAwesomeIcon}></i></a>
                ))}
            </div>
        </div>
    </section>
)

export default About
