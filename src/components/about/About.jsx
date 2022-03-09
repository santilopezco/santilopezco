import "./about.css";
import Education from "../../img/education.jpeg";
import Logo from "../../img/Logo.svg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Education}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          
        </p>
        <p className="a-desc">
        I am a professional in social work, with 5 years of experience working in complex and changing contexts, in which I developed communication and teamwork skills that allow me to contribute to the achievement of objectives and the construction of productive work environments.<br/>
          Currently, through the Master's Degree in Digital Didactics, I build learning experiences for digital literacy of people who are in a situation of economic vulnerability and social marginalization. My knowledge in web application development allows me to generate solutions that effectively integrate technology, education and social sciences.
        </p>
        <div className="a-award">
          <img src={Logo} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Reference Photography</h4>
            <p className="a-award-desc">
            Education processes for parents in the department of Caquetá
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;