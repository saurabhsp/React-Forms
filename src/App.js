import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [pswd, setpswd] = useState("");
  function handleChange(e) {
    console.log(e.target.name)
    if(e.target.name === "fname"){
      const capName= (e.target.value).toUpperCase();
      setName(capName);
  }
  else{
    setpswd(e.target.value)
  }
}
 
  return (
    <>
      <div className="App">
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="fname" value={name} onChange={handleChange}></input>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="text" name="pswd" value={pswd} onChange={handleChange}></input>
        <br />
      </div>
    </>
  );
}

export default App;
