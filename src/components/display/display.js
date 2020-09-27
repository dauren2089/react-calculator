import React from "react";

const Display = (props) => {
    const number = props.value;
    const str = number.toString();
    const numbers = str.split('');

    const listItems = numbers.map(
        (number, index) =>
            <span key={index} className="list-item">
                {number}
            </span>
    );

    return (
        <div className="display">
            <span className="display-nbr">
                {listItems}
            </span>
        </div>
    )
}

export default Display;