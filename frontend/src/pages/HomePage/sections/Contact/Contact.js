import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Contact.scss";
import ContactInfo from "../../../../components/ContactInfo/ContactInfo";

export default function Contact() {
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
              <div className="embed-form-container">
                <div id="mc_embed_shell">
                  <div id="mc_embed_signup">
                    <form action="https://developergus.us21.list-manage.com/subscribe/post?u=e40a569cd7df3b77266a0c5f0&id=0045ca637a&f_id=0005d4e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate="">
                      <div id="mc_embed_signup_scroll">
                        <div className="indicates-required">
                          <span className="asterisk">*</span> indicates required
                        </div>
                        <div className="mc-field-group">
                          <label htmlFor="mce-EMAIL">
                            Email Address <span className="asterisk">*</span>
                          </label>
                          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" defaultValue="" />
                        </div>
                        <div className="mc-field-group">
                          <label htmlFor="mce-FNAME">
                            First Name <span className="asterisk">*</span>
                          </label>
                          <input type="text" name="FNAME" className="required text" id="mce-FNAME" defaultValue="" required="" />
                        </div>
                        <div className="mc-field-group">
                          <label htmlFor="mce-LNAME">
                            Last Name <span className="asterisk">*</span>
                          </label>
                          <input type="text" name="LNAME" className="required text" id="mce-LNAME" defaultValue="" required="" />
                        </div>
                        <div id="mce-responses" className="clear">
                          <div className="response" id="mce-error-response" style={{ display: "none" }} />
                          <div className="response" id="mce-success-response" style={{ display: "none" }} />
                        </div>
                        <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                          <input type="text" name="b_e40a569cd7df3b77266a0c5f0_0045ca637a" tabIndex={-1} defaultValue="" />
                        </div>
                        <div className="clear">
                          <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" defaultValue="Subscribe" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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

{
  /* 
<div className="input-element">
                <input type="text" value={emailState.value} className="email" placeholder="Email" onChange={handleEmail} onKeyDown={handleFormEnter} />
                {getEmailError()}
              </div>

*/
}
