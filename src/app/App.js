import React from 'react';
import './App.css';

import Header from './components/header/Header';
import FeaturePhoto from './components/featurePhoto/FeaturePhoto';
import About from './components/about/About';
import IronManProjects from './components/projects/IronManProjects';
import ContactIronMan from './components/contact/ContactIronMan';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <FeaturePhoto />
      <About />
      <IronManProjects />
      <ContactIronMan />
      <Footer />
    </div>
  );
}

export default App;
