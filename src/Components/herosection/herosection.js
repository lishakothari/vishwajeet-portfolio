import React from 'react';
import "./hero.css";
import image from "../../assets/hero.jpg";

function Hero() {
  return (
    <div className="flex-container">
      <div className="flex-item-left">
          Hello, 
          I am Vishwajeet Deshmukh. <br /> A Historian and Lawyer
          I’ve included links to guitar and ukulele music, a recipe for homemade almond milk (courtesy of Gandhi), and my favorite childhood family portrait. Hope you find something meaningful here. If you have questions, thoughts, or your own recipes to share, feel free to contact me.

          Hello, 
          I am Vishwajeet Deshmukh. <br /> A Historian and Lawyer
          I’ve included links to guitar and ukulele music, a recipe for homemade almond milk (courtesy of Gandhi), and my favorite childhood family portrait. Hope you find something meaningful here. If you have questions, thoughts, or your own recipes to share, feel free to contact me.
      </div>
      <div className="flex-item-right">
          <img src={image} alt='Vishwajeet' className='hero' />
      </div>
    </div>
  );
}

export default Hero;
