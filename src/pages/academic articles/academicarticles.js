import React from 'react'
import "./academic.css";
import {academicdata} from "./academic";

function AcademicArticles() {
  return (
    <div className='academic-page'>
        <div className="academic-card">
            {academicdata.map(media =>
                <div key={media.id}>
                    <img className='academic-image' src={media.image} alt="israel" />
                    <h2>{media.title}</h2>
                    <p className="academic-description">{media.description}</p>
                    <p>{media.publisher}</p>
                    <p><a className="academic-a" href={media.article}>Read</a></p>
                </div>
             )}
        </div>
    </div>
)}

export default AcademicArticles;
