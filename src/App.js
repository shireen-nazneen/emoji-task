import './App.css';
import Card_ from './Card_'
import SearchPage from './SearchPage';
import React, { useState } from 'react';
// import { computeHeadingLevel } from '@testing-library/react';




const data = require("./emoji.json")
function App() {

  // this is my json file data
  const newList = data

  // this is the setsate method  for initliaz 
  const [elemnt, setEle] = useState("")
  const [searchElement, setSearchElememnt] = useState("")
  const [disabale, setDisable]=useState(false)

  // this is my onsubmit method for onclick
  function onsubmit(e) {
    console.log(e.target.value)
    e.preventDefault()
    setSearchElememnt(elemnt)
  }


// this is on change method for input box 
  function onchange(e) {
    setEle(e.target.value);
    setDisable(disabale)
    console.log(disabale)

    
  }


  // this is found value for 
  let found = true
  let displayLimited = 0
  const My_element = newList.filter((e) => {
    if (e.title.includes(searchElement)) {

      found = false
      displayLimited++
      if (displayLimited <= 10) {
        return e.title
      }
    }
  })

  return (
    <div className="App">
    <h3 className="text-shadow -black">Emoji</h3>
      <SearchPage onsubmit={onsubmit} onchange={onchange}></SearchPage>
      <div className="container">
        <div className="mb-10 shadow box">
          <div className="mb-10">
            <div className="row p-3 bg-white mt-5 justify-content-center ">
              {found
                ? <div className="p-3 border shadow box mb-2" style={{ "width": "160px", "paddingRight": "2px", "margin": "6px" }}>
                    <Card_ title={"not found"} symbol={"😕"} ></Card_>
                  </div>
                : My_element.map((item, index) => (
                  <div className="p-3 border shadow box mb-2" style={{ "width": "160px", "paddingRight": "2px", "margin": "6px" }} key={index}>
                    <Card_ title={item.title} symbol={item.symbol} ></Card_>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
