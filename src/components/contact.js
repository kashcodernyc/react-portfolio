import React from 'react';
import { useState } from 'react';
import {FaMapMarkerAlt, FaPhoneVolume, FaPaperPlane, FaGlobe} from 'react-icons/fa';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../contact.scss'








const Contact = () => {
    const[state,setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''

    });

    const{name, email, subject, message} = state;
    

    const handleInput = (e) => {
        let{name, value} = e.target;
        setState({...state, [name]: value})

    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!name || !email || !subject ||!message){
            toast.error('Please provide value in each input field')
        }else{
            const res = fetch("https://contactform-d4f78-default-rtdb.firebaseio.com/contacts.json",

                {
                    method: "POST",
                    headers: {
                        "Content-Typer": "application/json"
                    },

                    body: JSON.stringify({
                        name,
                        email,
                        subject,
                        message
                    }),

                }
            )
            setState({ name: '', email: '', subject: '', message: ''})
            toast.success('Form submitted successfully')
        }
    }
    

    
    return(
        
        <section className = 'contact-section'>
            <div className = 'container'>
                <ToastContainer position = 'top-center'/>
                <div className = 'row justify-content-center'>
                    <div className = 'col-md-10'>
                        <div className = 'wrapper'>
                            <div className = 'row no-gutters'>
                                <div className = 'col-md-6'>
                                    <div className = 'contact-wrap w-100 p-1g-5 p-4'>
                                        <h3 className = 'mb-4'>send me a message</h3>
                                        <form id = 'contactForm' className = 'contactForm' onSubmit = {handleSubmit}>
                                            <div className = 'row'>
                                                <div className = 'col-md-12'>
                                                    <div className = 'form-group'>
                                                        <input type = 'text' className = 'form-control' name = 'name' placeholder = 'Name' onChange = {handleInput} value = {name}/>
                                                    </div>
                                                </div>
                                                <div className = 'col-md-12'>
                                                    <div className = 'form-group'>
                                                        <input type = 'email' className = 'form-control' name = 'email' placeholder = 'Email'onChange = {handleInput}value = {email}/>
                                                    </div>
                                                </div>
                                                <div className = 'col-md-12'>
                                                    <div className = 'form-group'>
                                                        <input type = 'text' className = 'form-control' name = 'subject' placeholder = 'Subject' onChange = {handleInput} value = {subject}/>
                                                    </div>
                                                </div>
                                                <div className = 'col-md-12'>
                                                    <div className = 'form-group'>
                                                        <textarea type = 'text' className = 'form-control' name = 'message' placeholder = 'Message' cols = '30' rows = '6' onChange = {handleInput} value = {message}>
                                                        </textarea>
                                                    </div>
                                                </div>
                                                <div className = 'col-md-12'>
                                                    <div className = 'form-group'>
                                                        <input type = 'submit' value = 'Send Message' className = 'btn btn-primary'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className = 'col-md-6 d-flex align-items-stretch'>
                                    <div className = 'info-wrap w-100 p-1g-5 p-4 img'>
                                        <h3>Connect With Me</h3>
                                        <p className = 'mb-4'>
                                            We're open for any suggestion or just to have a chat
                                        </p>
                                        <div className = 'dbox w-100 d-flex align-item-center'>
                                            <div className = 'icon d-flex align-items-center justify-content-center'>
                                                <span className = 'fa fa-map-marker'><FaMapMarkerAlt/></span>
                                            </div>
                                            <div className = 'text pl-3'>
                                                <p><span>Address:</span> Branford, Connecticut</p>
                                            </div>
                                        </div>
                                        <div className = 'dbox w-100 d-flex align-item-center'>
                                            <div className = 'icon d-flex align-items-center justify-content-center'>
                                                <span className = 'fa fa-phone'><FaPhoneVolume/></span>
                                            </div>
                                            <div className = 'text pl-3'>
                                                <p><span>Phone:</span> 
                                                <a href = 'tel://3472807828'> +1 347 280 7828</a></p>
                                            </div>
                                        </div>
                                        <div className = 'dbox w-100 d-flex align-item-center'>
                                            <div className = 'icon d-flex align-items-center justify-content-center'>
                                                <span className = 'fa fa-paper-plane'><FaPaperPlane/></span>
                                            </div>
                                            <div className = 'text pl-3'>
                                                <p><span>Email:</span>
                                                <a href = 'mailto:prakash_subba08@hotmail.com'> prakash_subba08@hotmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                         <div className = 'dbox w-100 d-flex align-item-center'>
                                            <div className = 'icon d-flex align-items-center justify-content-center'>
                                                <span className = 'fa fa-fa-globe'><FaGlobe/></span>
                                            </div>
                                            <div className = 'text pl-3'>
                                                <p><span>Website:</span>
                                                <a href = '#'> prakashsubba.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default Contact
