
function filter(callbackFunction, myArray){
    for(let item in myArray){
        callbackFunction()
    }
}

export default filter