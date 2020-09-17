import React from 'react';
import profilePic from './img/profile-photo.jpg';
import ToolkitIcons from './ToolkitIcons';
import Toolkit from './Toolkit';
import './About.css';

function About() {
  return (
    <>
      <div className=" blue-box text-center text-white py-5">
        <div className="text-center">
          <img src={profilePic} alt="Boris pic" className="profile-pic" />
        </div>
        <div className="m-auto px-5 mb-5 bio-text">
          <h2 className="hello-text mt-5">HELLO! I'M BORIS.</h2>

          <h3 className="mt-5 prompt-font text-white ">
            I am a Russian born, NY raised software engineer now residing on the west coast.<br />
          </h3>
          <h5 className="my-5 light-blue-text">
            I specialize in full stack development with an emphasis on front end design and optimization.
            </h5>
          <p className="m-auto px-2 bio-text text-white">
            My goal as a software engineer is to develop bold, elegant front end design, and a pleasant and
            intuitive user experience. I take pleasure from finding unique solutions to challenges, and from
            seeing successful applications launched, deployed, and maintained. I strive to write code that is
            easy to read, performant, thoughtful and scalable. I feel comfortable working with client side
            front end code, as well as back end applications, databases and API’s.<br /><br /> I have worked on
            several freelance projects, including sites for electronic artists Gladkill and Satellite Respond.
            I also held a software engineer intern position with Livestack.io. I am now seeking the next
            step in my development journey and I am actively pursuing employment opportunities.
        </p>
        </div>
      </div>

      <div className="px-5 py-5 teal-box text-center">
        <Toolkit />
        <ToolkitIcons />
      </div>

      <div className="bluer-box text-center">

        <div className="center-box">
          <h3 className="alata-font pt-5 light-blue-text ">
            WHEN I'M NOT CODING...
        </h3>
          <p className="m-auto p-5 bio-text">
            I spend my time playing piano, writing and recording music, cooking and loving food
            of all kinds, riding my skateboard, hiking and spending time in nature, reading sci-fi, futurism 
            and horror, playing games (videogames, tabletop, and board games), watching cinema and
            shows (let's talk about Watchmen!) and hanging out with my cat & dog.
        </p>
        </div>
      </div>

    </>
  )
}

export default About