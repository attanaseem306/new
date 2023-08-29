import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './card';
import SimpleSlider from './slider';
import React from 'react';
import plus from './calculate';
import BasicExample from './cardTwo';
import data from './data';

function App() {
  return (
    <div className="App">
  
    {
    data.map((data)=>{
      return <BasicExample
        title={data.title}
        img={data.img}/>
        
        console.log(data)
      })
    }
    
    </div>
   
  )
}

export default App;
