import React from 'react';
import "./footer.css";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer>
      <div className="rounded-social-buttons">
        <a className="social-button facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a className="social-button twitter" href="https://twitter.com/vishwajeetda" target="_blank" rel="noreferrer"><BsTwitter /></a>
        <a className="social-button linkedin" href="https://linkedin.com/in/vishwajeetarnav/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a className="social-button youtube" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><BsYoutube /></a>
        <a className="social-button instagram" href="https://www.instagram.com/vishwajeetarnav/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      </div>  
    </footer>
  )
}