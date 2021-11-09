import React from 'react'
import { useState } from 'react';
import Project from './components/project';

const AllProjects = ({id, name, date, image, description, link}) => {

    const [readMore, setReadMore] = useState(false);
  

     return(
            <div className = 'portfolioContent' key = {id}>
                <div className = 'projectinfo'>
                    <h1>{name}</h1>
                    <p className = 'date'>{date}</p>
                    <p className = 'info'>{readMore ? description : `${description.substring(0,180)}... `}<button className = 'readmore' onClick = {() => setReadMore(!readMore)} >{readMore ? '...Read Less' : 'Read More'}</button>
                    </p>
                    <a href={link} target="_blank"><button className = 'button'>View Site</button></a>
                </div>
                <div className = 'description'>
                    <img className = 'projectimg' src = {image} alt = {image} />
                </div>      
            </div>
            )
}

export default AllProjects
