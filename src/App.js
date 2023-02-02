import React, { useState } from 'react';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Heroimage from './components/Home/Heroimage';
import About from './components/About/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 2000);
    return (
      !loading && (
        <>
          <NavBar />
          <Heroimage />
          <About />
          <Footer />
        </>
      )
    );
  }
};

export default App;
