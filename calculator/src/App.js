import React, { useState, useEffect } from 'react';
import Instructions from './components/Instructions';
import Inputs from './components/Inputs';
import Output from './components/Ouput'
import './app.css';

function App() {

  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [data, setData] = useState({
    total: 0,
    tip: 0,
    billTotal: 0
  });



  const calculateTip = (total, tip) => {
    setTotal(total);
    setTip(tip/100);
  }

  useEffect(() => {
    setData({ 
      ...data, 
      total, 
      tip: (total * tip).toFixed(2), 
      billTotal: (total * (1 + tip)).toFixed(2)
    });

  }, [total, tip]);


  return (
    <div className='app'>
      <Instructions/>
      <Inputs calculateTip={calculateTip}/>
      <Output data={data}/>
    </div>
  );
}

export default App;
