import { useState } from "react";

export default function Education({person, onChange}){
    const {degree, institution, start, end,} = person
    
    return(
        <section>
         <button className="btn" >Education</button>
         <div className="education" > 
         <label htmlFor="degree">Degree</label>
         <input type="text" onChange={onChange} value={degree} name="degree"  className="degree" placeholder="Bachelor Degree of ..."/>
         <label htmlFor="university">Institution</label>
         <input type="text" onChange={onChange} value={institution} name="institution" className="university" placeholder="Sudhanshu University"/>
         <label htmlFor="start">start Year</label>
         <input type="month" onChange={onChange} value={start} name="start" className="start" placeholder="Aug 2024"/>
         <label htmlFor="end">End Year</label>
         <input type="month" onChange={onChange} value={end} name="end" className="end" placeholder="sep 2028" />
            </div>
        </section>
    )
}