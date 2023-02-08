import React, { useState } from 'react';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import HomePage from './components/Home/Homepage';
import Blurb from './components/Blurb/blurb';
import About from './components/About/about';
import Stripe from './components/Stripe/stripe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const App = () => {
  // const [loading, setLoading] = useState(true);

  // const spinner = document.getElementById('spinner');
  // if (spinner) {
  //   setTimeout(() => {
  //     spinner.style.display = 'none';
  //     setLoading(false);
  //   }, 2000);
  return (
    <>
      <NavBar />
      <HomePage />
      <Blurb />
      <About />
      <Stripe />
      <Footer />
    </>
  );
};

export default App;
