import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function About() {
  return (
    <>
      <section className="container text-center">
        <div class="row aboutMeContainer">
          <article className="aboutMe">
            <h2>Services</h2>
            <ul>
              <li>Video Meetings & Content Creation Lighting</li>
              <li>Smart Entertainment</li>
              <li>Internet Of Things</li>
              <li>Home Audio Design</li>
              <li>Networking</li>
              <li>Smart Lighting</li>
              <li>Home Office Optimisation and Design</li>
            </ul>
          </article>
        </div>
      </section>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Smart Home Understanding</h5>
            <p>
              Understand the in & outs, Have all the infomation without the bias
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Smart Entertainment</h5>
            <p>The Knowledge to design and upset an amazing experiance</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Internet Of Things</h5>
            <p>Combine the soft and the hard</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Video Meetings & Content Creation Lighting</h5>
            <p>Have the Perfect Lighting and background setup</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default About;
