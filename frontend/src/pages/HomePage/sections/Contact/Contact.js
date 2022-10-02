

import React,{ useEffect, useState } from 'react';
import { validate } from 'react-email-validator';
import AOS from 'aos';
import 'aos/dist/aos.css';

import email2 from '../../../../images/contact-icons/email2.png';
import phone from '../../../../images/contact-icons/phone.png';
import thumbsUp from '../../../../images/contact-icons/thumbs-up.png';

import './Contact.scss';


export default function Contact(){

    const [ nameState, setNameState ] = useState({
        value: '',
        required: true, 
        valid: false,
        changed: false
    })

    const [ emailState, setEmailState ] = useState({
        value: '',
        required: true, 
        valid: false, 
        changed: false
    })

    const [ messageState, setMessageState ] = useState({
        value: ''
    })

    const [ serverState, setServerState ] = useState({
        response: '',
        sent: false
    });

    const resetFormAfterSentSucess = () => {
        setNameState(prevState=>{
            return{
                ...prevState, 
                value: '',
                valid: false,
                changed: false
            }
        })
        setEmailState(prevState=>{
            return{
                ...prevState, 
                value: '',
                valid: false,
                changed: false
            }
        })
        setMessageState({
            value: ''
        })
    }

    const handleFormEnter = e => {
        if( e.key === 'Enter' ){
            formSubmit(e);
        }
    }

    const handleName = e => {
        setNameState(prevState=>{
            return{
                ...prevState, 
                value: e.target.value, 
                valid: e.target.value !== null ? true : false,
                changed: true
            }
        })
    }

    const handleEmail = e => {
        setEmailState(prevState => {
            return{
                ...prevState,
                value: e.target.value,
                valid: validate(emailState.value),
                changed: true
            }
        })
    }

    const handleMessage = e => {
        setMessageState({
            value: e.target.value
        })
    }

    const formSubmit = e => {
        e.preventDefault();
        if(
            ( 
                emailState.valid === true && 
                nameState.valid === true 
            )
            && 
            (
                emailState.value !== '' &&
                nameState.value !== ''
            )
        ){
            fetch(`/api/contact/`)
                .then(response => response.json())
                .then(data => {
                    setServerState({
                        sent: true, 
                        response: data.data
                    })
                })
            // setServerState({
            //     sent: false, 
            //     response: 'We have received your message and will get back to shortly!'
            // })
            resetFormAfterSentSucess();
        }else{
            setServerState({
                sent: false, 
                response: 'Please fill out the form to send a message.'
            })
            resetFormAfterSentSucess();
        }
    }

    const getNameError = () => {
        if(
            ( 
                nameState.value === '' 
                || 
                nameState.value === null 
            ) 
            && 
            nameState.changed === true
        ){
            return <p className="form_error error_name">A name must be provided.</p>
        }
    }

    const getEmailError = () => {
        if(
            ( 
                emailState.value === '' 
                || 
                emailState.value === null 
            ) 
            &&
            emailState.changed === true 
        ){
            return <p className="form_error error_email">A valid email must be provided</p>
        }

        if(
            emailState.valid === false && emailState.changed === true && ( emailState.value !== '' || emailState.value !== null ) 
        ){
            return <p className="form_error error_email">Email must be formatted correctly</p>
        }
    }

    useEffect(() => {
        AOS.init({
            offset: 400
        });
        AOS.refresh();
    }, []);

    return(
        <div id="contact">
            <div className="container">
                <div className="row contact-form-row">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="contact-form">
                            <h2 className="heading">
                                Get In Touch
                            </h2>
                            <div className="text-underline-1"></div>
                            <div className="input-element">
                                <input 
                                    type="text"
                                    className="name"
                                    placeholder="Name"
                                    value={nameState.value}
                                    onChange={handleName}
                                    onKeyDown={handleFormEnter}
                                />
                                {
                                    getNameError()
                                }
                            </div>
                            <div className="input-element">
                                <input 
                                    type="text"
                                    value={emailState.value}
                                    className="email"
                                    placeholder="Email"
                                    onChange={handleEmail}
                                    onKeyDown={handleFormEnter}
                                />
                                {
                                    getEmailError()
                                }
                            </div>
                            <div className="input-element">
                                <textarea
                                    placeholder="Message"
                                    value={messageState.value}
                                    className="message"
                                    onChange={handleMessage}
                                    onKeyDown={handleFormEnter}
                                />
                            </div>
                            <button onClick={(e)=>formSubmit(e)} >
                                <span>
                                    Submit
                                </span>
                            </button>
                            {
                                serverState.response !== '' ? 
                                <p className="server-response">{serverState.response}</p>
                                : ''
                            }
                        </div>
                        <div className="gradient"></div>
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <iframe title="Google map of the city of San Diego" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429157.54675741366!2d-117.389166995983!3d32.824240427869604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2smx!4v1664243066005!5m2!1sen!2smx" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="row contact-info-row">
                    <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="info-part" data-aos="fade-down" data-aos-offset="200">
                            <div className="icon-container">
                                <img className="icon" src={email2} alt="Email icon"/>
                            </div>
                            <div className="info">
                                <h4 className="info-title">Email</h4>
                                <div className="info-link-container">
                                    <a href="mailto:contact@developergus.com">contact@developergus.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="info-part" data-aos="fade-down" data-aos-offset="200">
                            <div className="icon-container">
                                <img className="icon" src={phone} alt="Phone icon"/>
                            </div>
                            <div className="info">
                                <h4 className="info-title">Phone</h4>
                                <div className="info-link-container">
                                    <a href="tel:+1-619-432-2871">+1-619-432-2871</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="info-part" data-aos="fade-down" data-aos-offset="200">
                            <div className="icon-container">
                                <img className="icon" src={thumbsUp} alt="Thumbs up icon"/>
                            </div>
                            <div className="info">
                                <h4 className="info-title">Social Media</h4>
                                <div className="info-link-container social-media">
                                    <ul>
                                        <li className="youtube">
                                            <a href="https://www.youtube.com/channel/UChuhEhCujTGP1mfmPdtuVhA" target="_blank" rel="noopener noreferrer" aria-label="youtube channel">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18 social_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                                            </a>
                                        </li>
                                        <li className="github">
                                            <a href="https://github.com/subzero783" target="_blank" rel="noopener noreferrer" aria-label="github">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github profile" class="svg-inline--fa fa-github fa-w-16 social_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                            </a>
                                        </li>
                                        <li className="linkedin">
                                            <a href="https://www.linkedin.com/in/subzero783-gustavo-amezcua/" target="_blank" rel="noopener noreferrer" aria-label="linkedin profile">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14 social_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}