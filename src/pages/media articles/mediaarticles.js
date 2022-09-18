import React from 'react'
import "./mediaarticles.css";
import {mediadata} from "./media";

function MediaArticles() {
  return (
    <div className='media-page'>
        <div className="media-card">
            {mediadata.map(media =>
                <div key={media.id}>
                    <img className='media-image' src={media.image} alt="israel" />
                    <h2>{media.title}</h2>
                    <p className="media-description">{media.description}</p>
                    <p>{media.publisher}</p>
                    <p><a className="media-a" href={media.article}>Read</a></p>
                </div>
             )}
        </div>
    </div>
)}

export default MediaArticles;
