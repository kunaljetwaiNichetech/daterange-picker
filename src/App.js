import { useState } from 'react';
import './App.css'; 
import Tryingdatepicer from './components/Tryingdatepicer';
import Datepicker from './components/Datepicker';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Display from './components/Display';
import Display2 from './components/Display2';
import Ternaryy from './components/Ternaryy';
import Ternary2 from './components/ternary2';

function App() {
  // const [lala,setlala]=useState()
  // const handelchange=(e)=>{
  //   console.log(e.target.value)
  //   setlala(e.target.value)
  // }
  // console.log("this is lala",lala)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Datepicker/>} />
          <Route path='/display' element={<Display/>} />
          <Route path='/d' element={<Display2/>} />
          <Route path='/ter' element={<Ternaryy/>} />
          <Route path='/ter2' element={<Ternary2/>} />

        </Routes>
      </Router>
    {/* <h1>this is mian div</h1>
    <Tryingdatepicer/>
    <h2>the date range picker</h2> */}
    {/* <Datepicker/> */}
    {/* <input type='text 'onChange={handelchange}/> */}

    </div>
  );
}

export default App;
