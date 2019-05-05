import React from 'react';
import './FeaturePhoto.css';

import ironman_img from '../../images/iron-man.jpeg'
function FeaturePhoto() {
  return (
    <section className="feature-container" id="feature-container" >
        <div className="feature-ironman">
          <h1>I AM</h1>
          <h1>IRON MAN</h1>
        </div>
        <div className="feature-photo">
          <img src={ironman_img} />
        </div>
    </section>
  );
}

export default FeaturePhoto;