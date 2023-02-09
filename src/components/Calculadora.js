import './Calculadora.css'
import Container from '@mui/material/Container'
import { useState } from 'react'

function Calculadora() {
  const [number, setNumber] = useState(0)
  const [oldNumber, setOldNumber] = useState(0)
  const [operator, setOperator] = useState()

  function inputNumber(e) {
    var inputNum = e.target.textContent
    if (number === 0) {
      setNumber(inputNum)
    }

    else {
      setNumber(number + inputNum)
    }
  }

  function porcentage() {
    setNumber(number / 100)
  }

  function changeSign() {
    if (number > 0) {
      setNumber(-number)
    }

    else {
      setNumber(Math.abs(number))
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput)
    setOldNumber(number)
    setNumber(0)
  }

  function calculate() {
    switch (operator) {
      case '/':
        setNumber(parseFloat(oldNumber) / parseFloat(number))
        break
      case 'x':
        setNumber(parseFloat(oldNumber) * parseFloat(number))
        break
      case '-':
        setNumber(parseFloat(oldNumber) - parseFloat(number))
        break
      case '+':
        setNumber(parseFloat(oldNumber) + parseFloat(number))
        break
    }
  }

  function clearInput() {
    setNumber(0)
  }

  return (
    <div class="container">
      <Container maxWidth="xs">
        <div className='wrapper'>
          <h1>{number}</h1>
          <button onClick={clearInput} className='white' >AC</button>
          <button onClick={changeSign} className='white'>+/-</button>
          <button onClick={porcentage} className='white'>%</button>
          <button onClick={operatorHandler} className='orange' value='/'>/</button>
          <button onClick={inputNumber}>7</button>
          <button onClick={inputNumber}>8</button>
          <button onClick={inputNumber}>9</button>
          <button onClick={operatorHandler} className='orange' value='x'>*</button>
          <button onClick={inputNumber}>4</button>
          <button onClick={inputNumber}>5</button>
          <button onClick={inputNumber}>6</button>
          <button onClick={operatorHandler} className='orange' value='-'>-</button>
          <button onClick={inputNumber}>1</button>
          <button onClick={inputNumber}>2</button>
          <button onClick={inputNumber}>3</button>
          <button onClick={operatorHandler} className='orange' value='+'>+</button>
          <button onClick={inputNumber}>0</button>
          <button onClick={inputNumber} className="dot">.</button>
          <button onClick={calculate} className='orange'>=</button>
        </div>
      </Container>
    </div>
  )
}

export default Calculadora
