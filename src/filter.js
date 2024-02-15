
function filter(callbackFunction, myArray){
    const filteredArray = [];
    for (let i = 0; i < myArray.length; i++){
        callbackFunction(myArray[i]);
    }
    return filteredArray;
}

export default filter