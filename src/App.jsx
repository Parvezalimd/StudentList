import React from 'react'
import { useState } from 'react'
import List from './list.jsx'
// import Data from './App.css'
import Data from './data.jsx'


function App() {
  const [people, setPeople] = useState(Data)
  const [num, setNum] = useState(0);
  const [name, setName] = useState('parvez');
  const [liked, setLiked] = useState(true);

  function checkbox(e){
    setLiked(console.log(e));
  }

  function func(){
    setNum(num+1)
  }
  function changeName(event){
    setName(console.log(event));
  }
  return (
    <>
    <div><h1>Student Lists</h1></div>
      <div className='container'>
        <h3>{people.length} Students</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>clear all</button>
    
      </div>

      <div>
        <label><input type="checkbox" name="" id="" checked = {liked} onClick={checkbox}/>I like this</label>
        <p>you {liked? 'like':'did not like'} this</p>
      </div>



      <div>
        <h1>{num}</h1>
        <button onClick={func}>click me</button>
        <p>My name is {name}</p>
        <input type="text" onKeyDown={changeName} placeholder='Write your name here...'/>
        </div>
      
    </>
  )
}

export default App
