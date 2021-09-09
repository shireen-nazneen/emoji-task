import React from "react";
import './App.css'

const SearchPage = ({onsubmit,onchange}) => {

  return (
      <form   className="form"  onSubmit={(e)=>onsubmit(e)} >
      <div>
          <input type="text" placeholder="Search -emoji" onChange={(e)=> onchange(e)} ></input>
          <button type="submit" disabled={false}>click me</button>
          </div>
       </form>   
  );
}

export default SearchPage;