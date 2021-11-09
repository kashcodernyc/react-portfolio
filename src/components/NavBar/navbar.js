import React from 'react'
import { FaGithub,  FaLinkedin} from 'react-icons/fa';
import { AiFillFile } from "react-icons/ai";
import Navigation from './navigation';
import MobileNavigation from './mobileNavigation';

const Navbar = () => {
    return (
        <div className = 'header'>
            <a href = '/'  id = 'kash' className = 'heading' > Kash Designs </a>
            <Navigation/>
            <MobileNavigation/>
            <div className='icons'>
                <a className='socmedia' href='https://github.com/kashcodernyc/' target='_blank'><FaGithub /></a>
                <a className='socmedia'
                    href='https://www.linkedin.com/in/prakash-subba-6b53b1142' target="_blank"> <FaLinkedin /> </a>
                <a className='socmedia' href='' target="_blank"><AiFillFile /></a>
            </div>    
             
        </div>
    )
}

export default Navbar
