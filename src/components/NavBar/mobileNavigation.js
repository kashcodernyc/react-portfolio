import NavLinks from "./NavLinks";
import { GiHamburgerMenu} from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";

const MobileNavigation = () => {
    const [click, setClick] = useState(false);

    const toggleClass = () => {
        setClick(!click)
    }
  
    const burgerIcon = <GiHamburgerMenu className = 'burgermenu' onClick = {toggleClass} />
    const closeIcon = <AiOutlineClose className = 'burgermenu' onClick = {toggleClass}/>
    


    return (
        <nav className = 'mobileNavigation'>
             {click ? closeIcon : burgerIcon}
             {click && <NavLinks />}    
        </nav>
       
    )
}

export default MobileNavigation;
