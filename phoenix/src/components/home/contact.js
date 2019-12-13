import React, { useState } from 'react';

import homeStyles from './home.module.scss';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  }

  const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  const handleSubjectChange = event => {
    setSubject(event.target.value);
  }

  const handleMessageChange = event => {
    setMessage(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(JSON.stringify({name, email, subject, message}));
  }

  return(
    <div className={homeStyles.contact} id="contact">
      <div className={homeStyles.emailForm}>
        <h3 className={homeStyles.contactHeader}>Send A Message</h3>
        <form className={homeStyles.form}>
          <fieldset className={homeStyles.fieldset}>
            <label>Your Name: </label>
            <input type='text' name='name' onChange={handleNameChange} value={name}/>
          </fieldset>
          <fieldset className={homeStyles.fieldset}>
            <label >Your Email: </label>
            <input type='text' name='email' onChange={handleEmailChange} value={email}/>
          </fieldset>
          <fieldset className={homeStyles.fieldset}>
            <label >Subject: </label>
            <input type='text' name='subject' onChange={handleSubjectChange} value={subject}/>
          </fieldset>
          <fieldset className={homeStyles.fieldset}>
            <label >Message: </label>
            <textarea name='message' onChange={handleMessageChange} value={message}/>
          </fieldset>

          <button className={homeStyles.button} onClick={handleSubmit}>Send Message</button>
        </form>
      </div>
      <div className={homeStyles.details}>
        <h3 className={homeStyles.contactHeader}>Get In Touch</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="addresses">          
          <p><span className="iconify" data-icon="entypo:location-pin" data-inline="false" width="1.5rem" height="1.5rem"></span> lorem ipsum dolor</p>            
          <p><span className="iconify" data-icon="uil:twitter-alt" data-inline="false" width="1.5rem" height="1.5rem"></span> lorem ipsum</p>
          <p><span className="iconify" data-icon="gridicons:phone" data-inline="false" width="1.5rem" height="1.5rem"></span> 123-456-7890</p>
          <p><span className="iconify" data-icon="bx:bxl-facebook-square" data-inline="false" width="1.5rem" height="1.5rem"></span> lorem dolor</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;