import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import smarthome from './images/smart-home.jpg';
import smartlighting from './images/smart-lighting.jpeg';
import homeoffice from './images/home-office-setup.jpg';
import IoT from './images/IOT.jpg';
import Tv from './images/backlit-tv.webp';
import desksetup from './images/desk-setup.jpg';
import networking from './images/networking.jpg';

function About() {
  return (
    <>
      <section className="container text-center">
        <div class="row aboutMeContainer"></div>
      </section>
      <Carousel id="services" variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={smarthome}
            alt="Smart Home Understaning"
          />
          <Carousel.Caption>
            <h5>Smart Home Understanding</h5>
            <p>
              Understand the Tech, Have all the information without the bias
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={smartlighting}
            alt="Smart Lighting"
          />
          <Carousel.Caption>
            <h5>Smart Lighting</h5>
            <p>Set the Mood and Take control of all the lighting in the room</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homeoffice}
            alt="Video/Content Production"
          />
          <Carousel.Caption>
            <h5>Video Meetings & Content Creation Lighting</h5>
            <p>Have an engaging and dynamic background with perfect lighting</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={IoT} alt="Internet of Things" />
          <Carousel.Caption>
            <h5>Internet Of Things</h5>
            <p>Everything is Connected</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Tv} alt="Smart Entertainment" />
          <Carousel.Caption>
            <h5>Smart Entertainment</h5>
            <p>Create a new space for viewing all content</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={desksetup} alt="Home Office " />
          <Carousel.Caption>
            <h5>Home Office Optimization and Design</h5>
            <p>A clear desk is a clear mind</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={networking}
            alt="Home Networking"
          />
          <Carousel.Caption>
            <h5>Home Networking</h5>
            <p>Fast and Secure WIFI at all times</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default About;
