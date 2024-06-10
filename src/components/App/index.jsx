import { Container, Content, ButtonsPad, Row } from './styles.jsx'
import Input from '../Input/index.jsx'
import Button from '../Button/index.jsx'
import { useState } from 'react'

const App = () => {

  const [expression, setExpression] = useState('');
  const [entry, setEntry] = useState('0');
  const [display, setDisplay] = useState({expr: '', entry: '0'});
  const [lastType, setLastType] = useState('number');
  const [lastOp, setLastOp] = useState('');

  function calc() {
    const [value_a, operation] = expression.split(' ')
    const value_b = entry
    let result = 0

    switch (operation) {
      case "+":
        result = parseFloat(value_a) + parseFloat(value_b)
        break
      case "-":
        result = parseFloat(value_a) - parseFloat(value_b)
        break
      case "x":
        result = parseFloat(value_a) * parseFloat(value_b)
        break
      case "÷":
        result = parseFloat(value_a) / parseFloat(value_b)
        break
    }
    return result.toString()
  }

  function clear() {
    setExpression('');
    setEntry('0');
    setDisplay({expr: '', entry: '0'});
    setLastType('number');
    setLastOp('');
  }

  function clearEntry() {
    //setExpression('');

    if (lastType === 'result') {
      clear()
    }

    setEntry('0');
    setDisplay(prev => ({...prev, entry: '0'}));
    setLastType('number');
  }

  function getPercentage() {
    
    if (lastType === 'result') {
      let value_a, value_b

      let expression_splited = expression.split(' ')

      value_a = parseFloat(expression_splited[0])

      if (expression_splited.length > 1) {
        value_b = value_a
      } else {
        value_b = entry
      }

      const result =  (value_a * value_b / 100).toString()

      setExpression(value_a.toString())
      setEntry(result);
      setDisplay({expr: result, entry: result})
      setLastType('result')

      return
    }
    

    const [value] = expression.split(' ')
    let result = parseFloat(entry) / 100 * parseFloat(value)
    result = result.toString()    

    setEntry(result)
    setDisplay({expr: expression + ' ' + result, entry: result})
    setLastType('partialResult')
  }

  function getResult() {
    const result = calc()
    setExpression(result + ' ' + lastOp)
    setDisplay({expr: expression + ' ' + entry + ' =', entry: result})
    setLastType('result')
  }

  function handleClick(event) {
    const {type, value} = event.target.dataset

    if (type === "number") {

      // set post result behaviour
      if (lastType === 'result') {
        clear()
        setDisplay({expr: '', entry: value})
        setEntry(value)
        return
      }

      // Prevent weird behaviour
      /// avoid useless zeros
      if (entry === '0' && value === '0') return
      /// clear unwanted zero before number
      if (entry === '0' && value !== '.') {
        setEntry(value)
        setDisplay(prev => ({...prev, entry: value }))
        setLastType(type)
        return
      }
      /// avoid multiple dots
      if (entry.includes('.') && value === '.') return


      if (lastType === "number") {
        setEntry(prev => prev + value)
        setDisplay(prev => ({...prev, entry: entry+value }))
        setLastType(type)
      } else {
        setEntry(value)

        let new_expr = expression;

        if (lastType === "partialResult") {
          const expr_splited = expression.split(' ')
          new_expr = expr_splited[0] + ' ' + lastOp
        }

        setDisplay({expr: new_expr, entry: value })
        setLastType(type)
      }
         
    }

    if (type === "operation") {
      // Prevent typing a sign before typing a number
      if (!expression && !entry) return
      // Prevent multiple signs in a row
      if (lastType === type && lastOp === value) return

      if (lastOp && lastType === "number") {
        const result = calc()
        setExpression(result + ' ' + value)
        setDisplay({expr: result + ' ' + value, entry: result })
        setEntry(result)
        setLastType(type)
        setLastOp(value)
        return
      }

      if (lastOp && lastType === "result") {
        const result = expression.split(' ')[0] || entry

        setExpression(result + ' ' + value)
        setEntry(result)
        setDisplay(prev => ({...prev, expr: result + ' ' + value}))
        setLastType(type)
        setLastOp(value)
        return
      }

      setExpression(prev => prev + entry + ' ' + value)
      setDisplay(prev => ({...prev, expr: entry+ ' ' + value }))
      setLastType(type)
      setLastOp(value)
    }

  }


  return <>
    <Container>
      <Content>
        <Input values={display}/>
        <ButtonsPad>

          <Row>
            <Button label="CE" onClick={clearEntry}/>
            <Button label="C" onClick={clear}/>
            <Button label="%" type="operation" onClick={getPercentage}/>
            <Button label="÷" type="operation" onClick={handleClick}/>
          </Row>

          <Row> 
            <Button label="7" type="number" onClick={handleClick}/>
            <Button label="8" type="number" onClick={handleClick}/>
            <Button label="9" type="number" onClick={handleClick}/>
            <Button label="x" type="operation" onClick={handleClick}/>
          </Row>

          <Row> 
            <Button label="4" type="number" onClick={handleClick}/>
            <Button label="5" type="number" onClick={handleClick}/>
            <Button label="6" type="number" onClick={handleClick}/>
            <Button label="-" type="operation" onClick={handleClick}/>
          </Row>

          <Row> 
            <Button label="1" type="number" onClick={handleClick}/>
            <Button label="2" type="number" onClick={handleClick}/>
            <Button label="3" type="number" onClick={handleClick}/>
            <Button label="+" type="operation" onClick={handleClick}/>
          </Row>

          <Row> 
            <Button label="+/-" />
            <Button label="0" type="number" onClick={handleClick}/>
            <Button label="." type="number" onClick={handleClick}/>
            <Button label="=" onClick={getResult}/>            
          </Row>










        </ButtonsPad>
      </Content>
    </Container>
  </>
}

export default App
