import React, { useEffect, useState } from "react";
import { validate } from "react-email-validator";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Contact.scss";
import ContactInfo from "../../../../components/ContactInfo/ContactInfo";

export default function Contact() {
  const [nameState, setNameState] = useState({
    value: "",
    required: true,
    valid: false,
    changed: false,
  });

  const [emailState, setEmailState] = useState({
    value: "",
    required: true,
    valid: false,
    changed: false,
  });

  const [messageState, setMessageState] = useState({
    value: "",
  });

  const [serverState, setServerState] = useState({
    response: "",
    sent: false,
  });

  const resetFormAfterSentSucess = () => {
    setNameState((prevState) => {
      return {
        ...prevState,
        value: "",
        valid: false,
        changed: false,
      };
    });
    setEmailState((prevState) => {
      return {
        ...prevState,
        value: "",
        valid: false,
        changed: false,
      };
    });
    setMessageState({
      value: "",
    });
  };

  const handleFormEnter = (e) => {
    if (e.key === "Enter") {
      formSubmit(e);
    }
  };

  const handleName = (e) => {
    setNameState((prevState) => {
      return {
        ...prevState,
        value: e.target.value,
        valid: e.target.value !== null ? true : false,
        changed: true,
      };
    });
  };

  const handleEmail = (e) => {
    setEmailState((prevState) => {
      return {
        ...prevState,
        value: e.target.value,
        valid: validate(emailState.value),
        changed: true,
      };
    });
  };

  const handleMessage = (e) => {
    setMessageState({
      value: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (emailState.valid === true && nameState.valid === true && emailState.value !== "" && nameState.value !== "") {
      fetch(`/api/contact/?email=${emailState.value}&name=${nameState.value}&message=${messageState.value}`)
        .then((response) => response.json())
        .then((data) => {
          setServerState({
            sent: true,
            response: data.data,
          });
        });
      resetFormAfterSentSucess();
    } else {
      setServerState({
        sent: false,
        response: "Please fill out the form to send a message.",
      });
      resetFormAfterSentSucess();
    }
  };

  const getNameError = () => {
    if ((nameState.value === "" || nameState.value === null) && nameState.changed === true) {
      return <p className="form_error error_name">A name must be provided.</p>;
    }
  };

  const getEmailError = () => {
    if ((emailState.value === "" || emailState.value === null) && emailState.changed === true) {
      return <p className="form_error error_email">A valid email must be provided</p>;
    }

    if (emailState.valid === false && emailState.changed === true && (emailState.value !== "" || emailState.value !== null)) {
      return <p className="form_error error_email">Email must be formatted correctly</p>;
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 400,
    });
    AOS.refresh();
  }, []);

  return (
    <div id="contact">
      <div className="container">
        <div className="row contact-form-row">
          <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="contact-form">
              <h2 className="heading">Get In Touch</h2>
              <div className="text-underline-1"></div>
              <div className="input-element">
                <input type="text" className="name" placeholder="Name" value={nameState.value} onChange={handleName} onKeyDown={handleFormEnter} />
                {getNameError()}
              </div>
              <div className="input-element">
                <input type="text" value={emailState.value} className="email" placeholder="Email" onChange={handleEmail} onKeyDown={handleFormEnter} />
                {getEmailError()}
              </div>
              <div className="input-element">
                <textarea placeholder="Message" value={messageState.value} className="message" onChange={handleMessage} onKeyDown={handleFormEnter} />
              </div>
              <button onClick={(e) => formSubmit(e)}>
                <span>Submit</span>
              </button>
              {serverState.response !== "" ? <p className="server-response">{serverState.response}</p> : ""}
            </div>
            <div className="gradient"></div>
          </div>
          <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <iframe title="Google map of the city of San Diego" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429157.54675741366!2d-117.389166995983!3d32.824240427869604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2smx!4v1664243066005!5m2!1sen!2smx" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}
