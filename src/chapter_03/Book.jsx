import React from "react";

function Book(props){
    return (
        <div>
            <h1>{`this book's name is ${props.name}`}</h1>
            <h2>{`this book's page amount is ${props.numOfPage}`}</h2>
        </div>
    )
}

export default Book;