import React from 'react'
import {useState} from 'react';
import data from '../data'


const Project = ({id, name, date, image, description, link}) => {
 return(
    <section className = 'singleProject'>
        <div className = 'singleContainer'>
            <h1>{name}</h1>
        </div>
    </section>
 )
   
   
   
}

export default Project
