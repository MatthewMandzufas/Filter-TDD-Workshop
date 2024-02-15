
function filter(callbackFunction, myArray){
    for (let i = 0; i < myArray.length; i++){
        callbackFunction(myArray[i]);
    }
}

export default filter