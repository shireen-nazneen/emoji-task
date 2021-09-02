import React from "react";
import './App.css'

const SearchPage = (props) => {
  return (
      <form  className="form">
          <input className="form-control " type="text" placeholder="Search -emoji" aria-label="Search" className="s" onChange={props.fun}></input>
      </form>   
  );
}

export default SearchPage;