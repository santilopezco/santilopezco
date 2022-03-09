import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Github from "../../img/github.svg"
import Linkedin from "../../img/linkedin.svg"
import Logo from "../../img/Logo.svg"
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_60lxuga",
        "template_uv8j30g",
        formRef.current,
        "ShWd3fAlOKyQ8XJQq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +57 300 766 4877
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              sangusts1@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Bogotá - Colombia
            </div>
            
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Get in touch.</b> Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
          <img src={Logo} alt="Logo" />
          <div className="c-pages">
            <a href="https://github.com/santilopezco"><img src={Github} alt="GitHub"/></a>
            <a href="https://www.linkedin.com/in/santilopezco/"><img src={Linkedin} alt="Linkedin"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;