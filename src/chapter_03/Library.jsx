import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="First Python" numOfPage={300}/>
            <Book name="First AWS" numOfPage={400}/>
            <Book name="First React" numOfPage={500}/>
        </div>
    )
}

export default Library;