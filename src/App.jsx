import { useState } from "react";
import "./App.css";
import Education from "./component/education";
import Experience from "./component/experience";
import General from "./component/general";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';

function App() {
  const pdfRef = useRef();
    
    const downloadPDF = () =>{
        const input = pdfRef.current;
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('Resume.pdf')
        
        });
      };

  const [person, setPerson] = useState({
   
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(person);
  };
  const [isActive , setIsActive] = useState(false);
  const handleshow = () => {
    const show = !isActive;
    setIsActive(show);
  }
  return (
    <section className="main" >
      <div className="write">
        <General person={person} onChange={handleChange} />
        <Education person={person} onChange={handleChange} />
        <Experience person={person} onChange={handleChange} />
      </div>

      <button className="btn" id="btn" onClick={handleshow}>CV</button>

      {isActive ? (<div className="cv" ref={pdfRef}>
        <h1 className="name">{person.name ? person.name : "Name"}</h1>
        <p className="name">
          {person.job_title ? person.job_title : "job-title"}
        </p>
        <div className="icon">
          <div className="num">
            <img
              src="src/assets/conversation.png"
              alt="mobile no."
              className="call"
            />
            :<p>{person.number ? person.number : "123-456-789"}</p>
          </div>
          <div className="mail">
            <img src="src/assets/email.png" alt="email" className="call" />:
            <p>{person.email ? person.email : "some@gmail.com"}</p>
          </div>
        </div>
        <hr />
        <div className="edu">
           <h1 className="edu_title">Education</h1>
           <p>{person.start ? person.start : "Jan 2024"} to {person.end ? person.end : "Dec 2028"}</p>
           <div className="insti">
            <h1>{person.degree ? person.degree : "B.E."}</h1>
            <p>{person.institution ? person.institution : "university"}</p>
          </div>
        </div>
        <hr />
        <div className="xp">
          <div>
           <h1 className="edu_title">Experience</h1>
           <p>{person.exp_start ? person.exp_start : "Jan 2024"} to {person.exp_end ? person.exp_end : "Dec 2028"}</p>
          </div>
          <div className="insti">
           <h1>{person.job_title ? person.job_title : "Cheif Executive officer"}</h1>
            <p>{person.Company_Name ? person.Company_Name : "CR Private ltd."}</p>
          </div>
        </div>
      </div>) : ("")}
      <div className="container"><button className="btn" onClick={downloadPDF} id="btn" >Download</button></div>
    </section>
  );
}
export default App;
