import React from "react";
import { useState } from "react";

export default function Experience({person, onChange}){
    const {job_title, Company_Name, exp_start, exp_end} = person

    return(
        <section>
            <button className="btn"  >Experience</button>
               <div className="experience"> 
                <label htmlFor="title">Job title</label>
                <input type="text" onChange={onChange} value={job_title} name="job_title" className="title" placeholder="frontend developer"/>
                <label htmlFor="company">Company Name</label>
                <input type="text" onChange={onChange} value={Company_Name} name="Company_Name" className="company" placeholder="kahan kaam karta hai"/>
                <label htmlFor="start">start date</label>
                <input type="date" onChange={onChange} value={exp_start} name="exp_start" className="start" placeholder="Aug 2024"/>
                <label htmlFor="end">End Date</label>
                <input type="date" onChange={onChange} value={exp_end} name="exp_end" className="end" placeholder="Sep 2028"/>
            </div>
        </section>
    )
}