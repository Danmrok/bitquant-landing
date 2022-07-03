import React from 'react';
import './App.sass';
import About from './Components/About/About';
import Fr1 from './Components/Features/1/Fr1';
import Fr2 from './Components/Features/2/Fr2';
import Fr3 from './Components/Features/3/Fr3';
import Full from './Components/Full/Full';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Pr1 from './Components/Pricing/1/Pr1';
import Pr2 from './Components/Pricing/2/Pr2';
import Pr3 from './Components/Pricing/3/Pr3';
import Testimonials from './Components/Testimonials/Testimonials';
import Crypto from './Components/Crypto/Crypto';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div className="App">
      <div className='app-header'>
      <Header />
      </div>
      <div className='app-main'>
      <Home />
      <About />
      <Fr1 />
      <Fr2 />
      <Fr3 />
      <Testimonials />
      <Pr1 />
      <Pr2 />
      <Pr3 />
      <Full />
      </div>
      <div className='app-footer'>
      <Crypto />
      <Footer />
      </div>
    </div>
  );
}

export default App;
