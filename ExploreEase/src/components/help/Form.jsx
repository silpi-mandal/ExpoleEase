import style from "../Style/Form.module.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Form=(props)=>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4z8cmfj', 'template_148kpkq', form.current, {
        publicKey: 'JbY5p0OmqaEGo0PBG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return(
    <>
     <div className={style.form}>
      <h2>{props.msg}</h2>
      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" />
      <input type="text" name="user_email" placeholder="Email" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea name="message" placeholder="Message" rows="4"></textarea>
      <button type="submit" className="btn btn-outline-dark">Send Message</button>
      </form>
     </div>
    </>
  )
}
export default Form;