import React from 'react';
import { Fade } from 'react-reveal';
import myPhoto from '../images/zdj1.png';
import myOtherPhoto from '../images/zdj2.jpg';

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="photos">
        <Fade left>
          <img src={myPhoto} alt="My like" />
        </Fade>
        <Fade right>
          <img src={myOtherPhoto} alt="My Other like" />
        </Fade>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet fringilla metus. Sed bibendum libero id elit varius, sit amet euismod magna eleifend. Aliquam congue nisl vel purus bibendum, sed laoreet ex posuere.</p>
    </section>
  );
}

export default About;