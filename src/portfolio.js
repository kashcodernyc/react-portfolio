import React from 'react'
import { useState } from 'react'
import data from './data'


const Portfolio = () => {
    const [projects, setProjects] = useState(data);
    console.log(projects);
    return (
        projects.map(({id, name, image, date}) => {
            return(
            <div key = {id} className = 'portfolio' id = 'portfolio'>
            <h1>{name}</h1>
            <img src = {image} />
            <p>{date}</p>
        </div>
            )
        })

    )
}

export default Portfolio
