import React from "react";

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
                        onClick={ () => props.handleOperation('/') }>/</button>
            </div>
            <div className="row">
                <button className="col grid-btn"
                        onClick = { () => props.handleAddNumber('7') }>7</button>
                <button className="col grid-btn"
                        onClick={ () => props.handleAddNumber('8') }>8</button>
                <button className="col grid-btn"
                        onClick={ () => props.handleAddNumber('9') }>9</button>
                <button className="col grid-btn color"
                        onClick={ () => props.handleOperation('*') }>*</button>
            </div>
            <div className="row">
                <button className="col grid-btn"
                        onClick={ () => props.handleAddNumber('4') }>4</button>
                <button className="col grid-btn"
                        onClick={ () => props.handleAddNumber('5') }>5</button>
                <button className="col grid-btn"
                        onClick={ () => props.handleAddNumber('6') }>6</button>
                <button className="col grid-btn color"
                        onClick={ () => props.handleOperation('-')}>-</button>
            </div>
            <div className="row">
                <button className="col grid-btn"
                        onClick={ () => props.handleAddNumber('1') }>1</button>
                <button className="col grid-btn"
                        onClick={ () => props.handleAddNumber('2') }>2</button>
                <button className="col grid-btn"
                        onClick={ () => props.handleAddNumber('3') }>3</button>
                <button className="col grid-btn color"
                        onClick={ () => props.handleOperation('+') }>+</button>
            </div>
            <div className="row">
                <button className="col grid-btn large"
                        onClick={ () => props.handleAddNumber('0') }>0</button>
                <button className="col grid-btn"
                        onClick={ props.addNumberDot }>.</button>
                <button className="col grid-btn color"
                        onClick={ props.handleEqual }>=</button>
            </div>
        </div>
    )
}

export default Buttons;