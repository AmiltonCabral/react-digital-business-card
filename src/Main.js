import React from 'react';
import ReactDOM from 'react-dom/client';

function Main() {
    return (
        <main className='Main'>
            <h1>Amilton Cabral</h1>
            <h3 className='person-function'>Full Stack Developer</h3>
            <h4>amiltoncabral.website</h4>
            <div>
                <a className='btn email'>Email</a>
                <a className='btn linkd'>LinkedIn</a>
            </div>

            <section>
                <h2>About</h2>
                <p>I'm a Science Computer student at UFCG in Brazil, actually learning React, JavaScript... I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </section>
            <section>
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
        </main>
    )
};

export default Main;