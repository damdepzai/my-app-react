import React, { useState } from 'react';
import './App.css';
import Step from './views/Steps';

function App() {
  const [currentStep, currentSetStep] = useState(1);
  const [totalStep, setTotalSep] = useState([
    {
      name: 'Step 1', 
      number: 1, 
      category:[
        {
          value:1,
          name:'breakfast'
        },
        {
          value:2,
          name:'lunch'
        },
        {
          value:3,
          name:'dinner'
        }
      ],
      data: {
        meal:null,
        people:null,
      }
    },
    {
      name: 'Step 2',
      number: 2,
      listRestaurants :[
        {
          value:1,
          name:'Restaurant 1'
        },
        {
          value:2,
          name:'Restaurant 2'
        },
        {
          value:3,
          name:'Restaurant 3'
        },
        {
          value:4,
          name:'Restaurant 3'
        },
      ],
      data:{
        restauranted:null
      }
    },
    {
       name: 'Step 3',
       number: 3,
       data:{

       }

    },
    {
      name: 'Preview',
      number:4
    },
  ]);
  

  return (
    <div className="App">
       <Step step={currentStep} setStep={currentSetStep} totalStep={totalStep}  setTotalStep={setTotalSep}/>
    </div>
  );
}

export default App;
