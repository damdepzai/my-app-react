import React, { useState } from 'react';
import './App.css';
import Step from './components/Steps';

function App() {
  const [currentStep, currentSetStep] = useState(1);
  const [totalStep, setTotalSep] = useState([
    {
      name: 'Step 1', 
      number: 1, 
      category:[
        {
          value:1,
          name:'Breakfast'
        },
        {
          value:2,
          name:'Lunch'
        },
        {
          value:3,
          name:'Dinner'
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
       dish:[
        {
          value:1,
          name:'Fish'
        },
        {
          value:2,
          name:'chicken'
        },
        {
          value:3,
          name:'pig'
        },
        {
          value:4,
          name:'tigers'
        },
       ],
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
