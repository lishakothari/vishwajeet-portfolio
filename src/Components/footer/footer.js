import React from 'react';
import "./footer.css";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer>
      <div className="rounded-social-buttons">
        <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><BsFacebook/></a>
        <a className="social-button twitter" href="https://www.twitter.com/" target="_blank"><BsTwitter /></a>
        <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><BsLinkedin /></a>
        <a className="social-button youtube" href="https://www.youtube.com/" target="_blank"><BsYoutube /></a>
        <a className="social-button instagram" href="https://www.instagram.com/" target="_blank"><BsInstagram /></a>
      </div>  
    </footer>
  )
}