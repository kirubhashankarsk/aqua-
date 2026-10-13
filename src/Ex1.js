import React from "react";
import { useState } from "react";
import "./Ex1.css";

const Ex1 = () => {

  const [data, setData] = useState({
    name: "Kirubhashankar",
    email: "raavanan@gmail.com",
    settings: {
      theme: "dark",
      isPublic: true
    }
  });

  function changeName(e) {
    setData({
      ...data,
      name: e.target.value
    });
  }

  function changeTheme() {
    setData({
      ...data,
      settings: {
        ...data.settings,
        theme: data.settings.theme === "dark" ? "light" : "dark"
      }
    });
  }

  return (
    <>
      <center>
        <div
          className="box"
          style={{
            background: data.settings.theme === "ligrth" ? "red" : "black",
            color: data.settings.theme === "dark" ? "white" : "black"
          }}
        >
          <h1>Hello {data.name}</h1>

          <input
            type="text"
            placeholder="enter name"
            onChange={changeName}
          />

          <br /><br />
          
          <button className="clo" onClick={changeTheme}>switch</button>
         
          <br /><br />

          {data.settings.isPublic && <p>Public Profile</p>}
        </div>
      </center>
    </>
  );
};

export default Ex1



//<button style={{backgroundColor:"lightblue",borderRadius:"15px"}}>Add to Cart</button>