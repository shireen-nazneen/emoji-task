import './App.css';
import Card_ from './Card_'
import SearchPage from './SearchPage';
import React,{useState} from 'react';




const data = require("./emoji.json")
function App() {

  // this is my json file data
  const newList = data

  // this is the setsate method  for initliaz
  const [elemnt, setEle] = useState("")
  function CHange(e) {
    setEle(e.target.value);

  }
 const My_element= newList.filter((e) => {
  
    console.log(e.title.includes(elemnt))
    if (e.title.includes(elemnt)) {
      console.log(e.title)
      return e.title
    }
})
return (
  <div className="App">
    <SearchPage fun={CHange}></SearchPage>
    <div className="container">
      <div className="mb-5">
        <div >
          <div className="row bg-white mt-5 justify-content-center">
          {
            My_element.map((item ,index) => (
              <div className="p-3 border" style={{ "width": "160px","paddingRight":"2px"}} key={index}>
          <Card_ title={item.title} symbol={item.symbol} ></Card_>
            </div>) )
          }

          </div>

        </div>
      </div>
    </div>
  </div>
);
}

export default App;
