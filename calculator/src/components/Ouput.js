import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Ouput = ({data, newKey}) => {

  const [tip, setTip] = useState(data.tip);
  const [billTotal, setBillTotal] = useState(data.billTotal);

  useEffect(() => {
    setTip(data.tip);
    setBillTotal(data.billTotal);
    console.log(data);
  }, [data])


  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Your tip amount is:</td>
            <td>${tip}</td>
          </tr>
          <tr>
            <td>Your have to pay a total of:</td>
            <td>${billTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Ouput
