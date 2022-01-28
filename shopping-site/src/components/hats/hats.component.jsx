import React from "react";
import { Link } from "react-router-dom";
const Hats = (props) => {
  return (
    <div>
      <h1>Hats Component</h1>
      <span>Hat A</span>
      <button onClick={() => props.history.push('/')}>Home</button>
      <Link to='/'>Home with link</Link>
    </div>
  );
};

export default Hats;
