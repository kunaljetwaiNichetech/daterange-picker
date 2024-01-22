import { useState } from 'react';
import './App.css'; 
import Tryingdatepicer from './components/Tryingdatepicer';
import Datepicker from './components/Datepicker';

function App() {
  // const [lala,setlala]=useState()
  // const handelchange=(e)=>{
  //   console.log(e.target.value)
  //   setlala(e.target.value)
  // }
  // console.log("this is lala",lala)
  return (
    <div className="App">

    <h1>this is mian div</h1>
    <Tryingdatepicer/>
    <h2>the date range picker</h2>
    <Datepicker/>
    {/* <input type='text 'onChange={handelchange}/> */}

    </div>
  );
}

export default App;
