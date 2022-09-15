import React from 'react'
import "./contact.css";
import { BsInstagram, BsTwitter } from 'react-icons/bs';


function Contact() {
  return (
    <div className='contact-page'>
        <div className="contact-card">
                <div>
                    <p><a className="contact-a" href=""><BsInstagram /></a></p>
                    <p><a className="contact-a" href=""><BsTwitter /></a></p>
                </div>
        </div>
    </div>
)}

export default Contact;
