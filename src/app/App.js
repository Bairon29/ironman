import React from 'react';
import './App.css';

import Header from './components/header/Header';
import FeaturePhoto from './components/featurePhoto/FeaturePhoto';
import About from './components/about/About';

function App() {
  return (
    <div className="app">
      <Header />
      <FeaturePhoto />
      <About />
    </div>
  );
}

export default App;
