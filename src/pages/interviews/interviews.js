import React from 'react'
import "./interviews.css";
import data from "./interviews.json";

function Interviews() {
  return (
    <div className='interview-page'>
        <div className="interview-card">
            {data.mediadata.map(media =>
                <div key={media.id}>
                    <h2>{media.title}</h2>
                    <p className="interview-description">{media.description}</p>
                    <p><a className="interview-a" href={media.video}>Watch</a></p>
                </div>
             )}
        </div>
    </div>
)}

export default Interviews;
