import React from 'react';

import Facebook from '../../assets/svg/facebook.svg'
import Twitter from '../../assets/svg/twitter.svg'
import Phone from '../../assets/svg/phone.svg'
import Location from '../../assets/svg/location.svg'

import homeStyles from './home.module.scss';


const Contact = () => {

  return(
    <div className={homeStyles.contact} id="contact">
      <div className={homeStyles.emailForm}>
        <h3 className={homeStyles.contactHeader}>Send A Message</h3>
        <form className={homeStyles.form}>
          <fieldset className={homeStyles.fieldset}>
            <label className={homeStyles.label}>Your Name: </label>
            <input type='text' name='name' className={homeStyles.input}/>
          </fieldset>
          <fieldset className={homeStyles.fieldset}>
            <label className={homeStyles.label}>Your Email: </label>
            <input type='text' name='email' className={homeStyles.input}/>
          </fieldset>
          <fieldset className={homeStyles.fieldset}>
            <label className={homeStyles.label}>Subject: </label>
            <input type='text' name='subject' className={homeStyles.input}/>
          </fieldset>
          <fieldset className={homeStyles.fieldset}>
            <label className={homeStyles.label}>Message: </label>
            <textarea name='message' className={homeStyles.input}/>
          </fieldset>
        </form>
      </div>
      <div className={homeStyles.details}>
        <h3 className={homeStyles.contactHeader}>Get In Touch</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="addresses">
          <div className="address">
            {/* <Location /> */}
            <p>lorem ipsum dolor</p>
          </div>
          <div className="address">
            {/* <Phone /> */}
            <p>lorem ipsum</p>
          </div>
          <div className="address">
            {/* <Twitter /> */}
            <p>123-456-7890</p>
          </div>
          <div className="address">
            {Facebook}
            <p>lorem dolor</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;