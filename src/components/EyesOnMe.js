import React from 'react'
function EyesOnMe() {
    function focusHandler(){
        console.log("Good!");
    }
    function blurHandler(){
        console.log("Hey! Eyes on me!");
    }
    return(
            <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
    )
}

export default EyesOnMe
