import React, { useState } from 'react'

function Inputs({ calculateTip }) {

  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);

  const handleChangeTotal = (e) => {
    setTotal(Number(e.target.value));
  }

  const handleChangeTip = (e) => {
    setTip(Number(e.target.value));
  }

  const handleClick = () => {
    if (!total || !tip) {
      alert("Input has to be a number and it can't be negative!")
    } else {
      calculateTip(total, tip);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tip Calculator</th>
            <th>Inputs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total bill</td>
            <td>
              <span>$</span>
              <input id="total" onChange={handleChangeTotal}></input>
            </td>
          </tr>
          <tr>
            <td>Tip amount</td>
            <td>
              <input onChange={handleChangeTip}></input>
              <span>%</span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td><button onClick={handleClick}>calculate</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Inputs
