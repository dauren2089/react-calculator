import React, {Component} from 'react';
import './App.sass';

export default class App extends Component {
    state = {
        value: [],
        setValue: '',
        operation: ''
    }
    handleEqual = () => {
        let sum;
        let operation = this.state.operation;
        let number1 = parseFloat(this.state.value);
        let number2 = parseFloat(this.state.setValue);

        if (operation === '+') {
            sum = number2 + number1;
        } else if (operation === '-') {
            sum = number2 - number1;
        } else if (operation === '*'){
            sum = number2 * number1;
        } else if (operation === '/') {
            sum = number2 / number1;
        } else if (operation === '%') {
            sum = number1 / 100;
        }
        this.setState({
            value: sum.toString()
        })
    }
    handlePlus = () => {
        this.setState({
            setValue: this.state.value,
            value: [],
            operation: '+'
        })
    }
    handleMinus = () => {
        this.setState({
            setValue: this.state.value,
            value: [],
            operation: '-'
        })
    }
    handleMulti = () => {
        this.setState({
            setValue: this.state.value,
            value: [],
            operation: '*'
        })
    }
    handleDelete = () => {
        this.setState({
            setValue: this.state.value,
            value: [],
            operation: '*'
        })
    }
    handlePercent = () => {
        let number1 = parseFloat(this.state.value);
        this.setState({
            value: number1 / 100
        })
    }
    handleSign = () => {
        let number = parseFloat(this.state.value);
        let sum = number * (-1);
        this.setState({
            value: sum
        })
    }
    addNbrDot = () => {
        const nbr = this.state.value
        const str = nbr.toString();
        const hasDot = str.includes('.', 0);
        if (str.length === 0) {
            this.setState({
                value: 0 + '.'
            })
        } else if (hasDot) {
            console.log('double dots')
        } else {
            this.setState({
                value: this.state.value + '.'
            })
        }

    }
    addNbr0 = () => {
        if (this.state.value === '0'){
           return
        }
        this.setState({
            value: this.state.value + '0'
        })
    }
    addNbr1 = () => {
        if (this.state.value === '0' ){
            this.setState({
                value: '1'
            })
        }
        else {
            this.setState({
                value: this.state.value + '1'
            })
        }
    }
    addNbr2 = () => {
        if (this.state.value === '0' ) {
            this.setState({
                value: '2'
            })
        } else {
            this.setState({
                value: this.state.value + '2'
            })
        }
    }
    addNbr3 = () => {
        if (this.state.value === '0' ) {
            this.setState({
                value: '3'
            })
        } else {
            this.setState({
                value: this.state.value + '3'
            })
        }
    }
    addNbr4 = () => {
        if (this.state.value === '0' ) {
            this.setState({
                value: '4'
            })
        } else {
            this.setState({
                value: this.state.value + '4'
            })
        }
    }
    addNbr5 = () => {
        if (this.state.value === '0' ) {
            this.setState({
                value: '5'
            })
        } else {
            this.setState({
                value: this.state.value + '5'
            })
        }
    }
    addNbr6 = () => {
        if (this.state.value === '0' ) {
            this.setState({
                value: '6'
            })
        } else {
            this.setState({
                value: this.state.value + '6'
            })
        }
    }
    addNbr7 = () => {
        if (this.state.value === '0' ) {
            this.setState({
                value: '7'
            })
        } else {
            this.setState({
                value: this.state.value + '7'
            })
        }
    }
    addNbr8 = () => {
        if (this.state.value === '0' ) {
            this.setState({
                value: '8'
            })
        } else {
            this.setState({
                value: this.state.value + '8'
            })
        }
    }
    addNbr9 = () => {
        if (this.state.value === '0' ) {
            this.setState({
                value: '9'
            })
        } else {
            this.setState({
                value: this.state.value + '9'
            })
        }
    }
    handleAC = () => {
        this.setState({
            value: '0'
        })
    }
    render() {
        return (
        <div className="App">
            <div className="App-box">
                <header className="App-header">
                    <h1>Calculator</h1>
                </header>
                <main>
                    <Display value = { this.state.value }/>
                    <Buttons handleAC = { this.handleAC }
                             handleSign = { this.handleSign }
                             handlePercent = { this.handlePercent }
                             handleEqual = { this.handleEqual }
                             handlePlus = { this.handlePlus }
                             handleMinus = { this.handleMinus }
                             handleMulti = { this.handleMulti }
                             handleDelete = { this.handleDelete }
                             addNumberDot={this.addNbrDot}
                             addNumber0={this.addNbr0}
                             addNumber1={this.addNbr1}
                             addNumber2={this.addNbr2}
                             addNumber3={this.addNbr3}
                             addNumber4={this.addNbr4}
                             addNumber5={this.addNbr5}
                             addNumber6={this.addNbr6}
                             addNumber7={this.addNbr7}
                             addNumber8={this.addNbr8}
                             addNumber9={this.addNbr9}/>
                </main>
            </div>
        </div>
        );
    }
}

const Display = (props) => {
    return (
        <div className="display">
            <span className="display-nbr"> { props.value } </span>
        </div>
    )
}

const Buttons = (props) => {
  return (
      <div className="grid container">
          <div className="row">
              <button className="col grid-btn"
              onClick={ props.handleAC } > AC</button>
              <button className="col grid-btn"
              onClick={ props.handleSign }>+/-</button>
              <button className="col grid-btn"
              onClick={ props.handlePercent }>%</button>
              <button className="col grid-btn color"
              onClick={ props.handleDelete }>/</button>
          </div>
          <div className="row">
              <button className="col grid-btn"
                      onClick = { props.addNumber7 }>7</button>
              <button className="col grid-btn"
                      onClick={ props.addNumber8 }>8</button>
              <button className="col grid-btn"
                      onClick={ props.addNumber9 }>9</button>
              <button className="col grid-btn color"
              onClick={ props.handleMulti }>*</button>
          </div>
          <div className="row">
              <button className="col grid-btn"
                      onClick={ props.addNumber4 }>4</button>
              <button className="col grid-btn"
                      onClick={ props.addNumber5 }>5</button>
              <button className="col grid-btn"
                      onClick={ props.addNumber6 }>6</button>
              <button className="col grid-btn color"
              onClick={ props.handleMinus }>-</button>
          </div>
          <div className="row">
              <button className="col grid-btn"
                      onClick={ props.addNumber1 }>1</button>
              <button className="col grid-btn"
                      onClick={ props.addNumber2 }>2</button>
              <button className="col grid-btn"
                      onClick={ props.addNumber3 }>3</button>
              <button className="col grid-btn color"
              onClick={ props.handlePlus }>+</button>
          </div>
          <div className="row">
              <button className="col grid-btn large"
                      onClick={ props.addNumber0 }>0</button>
              <button className="col grid-btn"
                      onClick={ props.addNumberDot }>.</button>
              <button className="col grid-btn color"
                      onClick={ props.handleEqual }>=</button>
          </div>
      </div>
  )
}