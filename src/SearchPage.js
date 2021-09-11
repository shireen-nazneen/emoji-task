import React from "react";
import './App.css'

const SearchPage = ({onsubmit,onchange}) => {

  return (
      <form   className="form"  onSubmit={(e)=>onsubmit(e)} >
      <div>
          <input className=" bg-white shadow box rounded-left"  style={{"widht":"500px"}} type="text" placeholder="Search -emoji" onChange={(e)=> onchange(e)} ></input>
          <button className="bg-white shadow box rounded-right"  type="submit" disabled={false}>click me</button>
          </div>
       </form>   
  );
}

export default SearchPage;