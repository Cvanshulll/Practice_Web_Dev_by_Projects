import { useState } from "react";
import "./styles.css";

export default function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: " ",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    resume: ""
  });

  const UpdateInput = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;

    const { value, name } = e.target;

    setFullName((preVal) => {
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preVal.lname,
      //     email: preVal.email
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preVal.fname,
      //     lname: value,
      //     email: preVal.email
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preVal.fname,
      //     lname: preVal.lname,
      //     email: value
      //   };
      // }
      return {
        ...preVal,
        [name]: value
      };
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="App">
      <aside>
        <h1>
          {fullName.fname} {fullName.lname}
        </h1>
        <p>
          {fullName.email} | {fullName.phone}
        </p>
        <div>
          <h5>Social Profiles</h5>
          <a href={fullName.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          {" | "}
          <a href={fullName.github} target="_blank" rel="noreferrer">
            Github
          </a>
          {" | "}
          <a href={fullName.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </aside>
      <form onSubmit={OnSubmit}>
        <input
          type="text"
          name="fname"
          onChange={UpdateInput}
          placeholder="Enter Your First Name"
        />
        <input
          type="text"
          name="lname"
          onChange={UpdateInput}
          placeholder="Enter Your Last Name"
        />
        <input
          type="email"
          name="email"
          onChange={UpdateInput}
          placeholder="Enter Your Email"
        />
        <input
          type="number"
          name="phone"
          onChange={UpdateInput}
          placeholder="Enter Your Phone Number"
        />
        <input
          type="link"
          name="linkedin"
          onChange={UpdateInput}
          placeholder="Enter Your Linkedin"
        />
        <input
          type="link"
          name="github"
          onChange={UpdateInput}
          placeholder="Enter Your Github"
        />
        <input
          type="link"
          name="resume"
          onChange={UpdateInput}
          placeholder="Enter Your Resume"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
