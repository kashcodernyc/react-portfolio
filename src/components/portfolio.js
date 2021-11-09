import React from 'react'
import { useState } from 'react'
import AllProjects from '../allProjects'
import data from '../data'
import Project from './project'




const Portfolio = () => {
    const [projects, setProjects] = useState(data);

    return (
        <section  className = 'portfolio'>
        <div className = 'title'>
            <h1 className = 'heading'>Portfolio</h1>
            <div className = 'underline'/>
        </div>
        <div className = 'projects'>
        {projects.map((project) => {
            return(
            <AllProjects  key = {project.id} {...project}/>
        )})}
         </div>
        </section>
    )
}

export default Portfolio
