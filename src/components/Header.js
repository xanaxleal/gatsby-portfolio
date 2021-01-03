import React from 'react'

export default function Header (props) {
    return <div>{props.fromIndex === "true" ? (
        <header className="header">
            <a href="/" className="brand">
                <h1 className="title">Ana Leal</h1>
            </a>
            <h3 className="text" id="intro">I'm a freelance Art Director and Designer based in Madrid. Currently focused on digital experiences and brand narratives for cultural, fashion and luxury clients. I teach at IED Madrid and steadly collaborate with <a href="http://studiotilt.com/">TILT</a> in London. </h3>
            <p className="text" id="contact">You can get in touch with me at <a href="mailto:ana@leal.work">ana@leal.work</a> :) </p>
        </header>
            ) : (
        <header class="header">
            <a href="/" class="brand">
                <h1 class="title">Ana Leal</h1>
            </a>
            <p class="text" id="project__intro"> </p>
            <a href="/" class="text" id="menu">Home</a>
        </header>
            )}
            </div>    
}

