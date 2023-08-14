import { useState } from "react";

export default function General({person , onChange}) {
  const {name, number, add, email} = person

  
  return (
    <section>
      <div className=" navbar">
        <img src="src/assets/logo.png" alt="logo" />
      </div>
      <hr />
      <button  className="btn">
        General Information
      </button>
      <form>  
          <div className="general">
            <label htmlFor="fullname">Name</label>
            <input
              type="text"
              placeholder="apna naam likh"
              className="fullname"
              onChange={onChange}
              value={name}
              name="name"
            />
            <label htmlFor="number">Phone no.</label>
            <input
              type="tel"
              placeholder="123-456-789"
              className="number"
              value={number}
              onChange={onChange}
              name="number"
            />
            <label htmlFor="add.">Address</label>
            <input
              type="text"
              placeholder="kude wali gali me"
              className="add."
              value={add}
              name="add"
              onChange={onChange}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="something@gmail.com"
              className="email"
              value={email}
              name="email"
              onChange={onChange}
            />
          </div>
      </form>
    </section>
  );
}
