import React from 'react';

import aboutImage from '../../images/Priyanka.jpg';

function About() {
  return (
    <section className='about'>
      <div className='about__container'>
        <img
          className='about__image'
          src={aboutImage}
          alt='Author of the website'
        />
        <div className='about__text-container'>
          <h2 className='about__title'>About the author</h2>
          <p className='about__text'>
            Hi, my name is Priyanka Kumari, and I am a Software Engineer @
            Infosys.
          </p>
          <p className='about__text'>
            This is my project in the Full Stack Development
            as an assignment by Conde Nest, in March 2021. The project's Frontend uses
            React and the Backend/API uses Node.js, Express.js, MongoDB,
            Mongoose, AWS. Basically, this app allows users to search
            news/articles using a public News API service.
          </p>
          <p className='about__text'>
            This assignment is using the following Full Stack Development technologies: HTML5, CSS3,
            flexbox, grid layout, BEM, Media queries, transition,
            JavaScript/JSX, DOM, Debugging, Git, Git/Github, Figma, Form
            validation, OOP, Webpack, NPM, React, React components, React Hooks,
            Node.js, Express.js, Database, MongoDB, Mongoose.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
