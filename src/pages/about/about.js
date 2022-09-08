import React from 'react';
import "./about.css";
import image from "../../assets/hero.jpg";
function Hero() {
  return (
    <>
<div className="flexcontainer">
     <div className="flex-item-right-about" style={{ textAlign:"center", fontSize:"50px", marginTop:20, fontFamily:"sans-serif"}}>ABOUT ME</div> 
      <div className="flex-item-left-about">
 A Historian and Lawyer
          I’ve included links to guitar and ukulele music, a recipe for homemade almond milk (courtesy of Gandhi), and my favorite childhood family portrait. Hope you find something meaningful here. If you have questions, thoughts, or your own recipes to share, feel free to contact me.
      </div>
      
    </div>

    </>
  );
}

export default Hero;
