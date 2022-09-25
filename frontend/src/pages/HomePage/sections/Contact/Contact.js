

import React,{ useEffect, useState } from 'react';
import { validate } from 'react-email-validator';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            console.log('sent');
            resetFormAfterSentSucess();
        }else{
            setServerState({
                sent: false, 
                response: 'Please fill out the form to send a message.'
            })
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
                <div className="row">
                    <div className="contact-form">
                        <h2 className="heading">
                            Get In Touch
                        </h2>
                        <div className="text-underline-1"></div>
                        <div className="input-element">
                            <input 
                                type="text"
                                defaultValue={nameState.value}
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
                                defaultValue={emailState.value}
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
                                defaultValue={messageState.value}
                                className="message"
                                onChange={handleMessage}
                                onKeyDown={handleFormEnter}
                            />
                        </div>
                        <button onClick={()=>formSubmit()} >
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
                </div>
            </div>
        </div>
    );
}