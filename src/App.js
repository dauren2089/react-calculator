import React, {Component} from 'react';

import Buttons from "./components/buttons";
import Display from "./components/display";
import './App.sass';

export default class App extends Component {
    state = {
        value: [],
        setValue: '',
        operation: ''
    }

    handleAddNumber = (nbr) => {
        // console.log( 'val: ' + nbr)
        const val = this.state.value
        if (val.length === 10){
            return console.log('Max size!')
        } else if (this.state.value === '0' ) {
            this.setState({
                value: nbr
            })
        } else {
            this.setState({
                value: this.state.value + nbr
            })
        }
        // console.log( 'State: ' + this.state.value)
    }
    handleOperation = (val) => {
        this.setState({
            setValue: this.state.value,
            value: [],
            operation: val
        })
    }
    handleEqual = () => {
        let total;
        let operation = this.state.operation;
        let number1 = parseFloat(this.state.value);
        let number2 = parseFloat(this.state.setValue);

        if (operation === '+') {
            total = number2 + number1;
        } else if (operation === '-') {
            total = number2 - number1;
        } else if (operation === '*'){
            total = number2 * number1;
        } else if (operation === '/') {
            total = number2 / number1;
        } else if (operation === '%') {
            total = number1 / 100;
        } else if (typeof total === "undefined") {
            return
        }

        if (total.toString().length >= 9) {
            this.setState({
                value: total.toPrecision(8).toString()
            })
        } else {
            this.setState({
                value: total.toString()
            })
        }

        // if ( sum === 0 ) {
        //     this.setState({
        //         value: 0
        //     })
        // }
        // console.log('SUM: '+ typeof(sum))
        // const string = sum.toPrecision(8).toString()
        // console.log('STR: '+ typeof(string))
        // console.log('PresSTR: '+ string)
        // this.setState({
        //     value: sum.toPrecision(8).toString()
        // })
    }
    handlePercent = () => {
        let number1 = parseFloat(this.state.value);
        this.setState({
            value: number1 / 100
        })
    }
    handleSign = () => {
        let number = parseFloat(this.state.value);
        let total = number * (-1);
        this.setState({
            value: total
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
                             handleOperation = { this.handleOperation }
                             addNumberDot={this.addNbrDot}
                             handleAddNumber = { this.handleAddNumber } />
                </main>
            </div>
        </div>
        );
    }
}
