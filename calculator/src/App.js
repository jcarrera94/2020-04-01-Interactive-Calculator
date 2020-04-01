import React, { useState } from 'react';
import Instructions from './components/Instructions';
import Inputs from './components/Inputs';
import './app.css';

function App() {

  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);

  const calculateTip = (total, tip) => {
    console.log(total, tip)
  }


  return (
    <div className='app'>
      <Instructions/>
      <Inputs calculateTip={calculateTip}/>
    </div>
  );
}

export default App;
