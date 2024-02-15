
function filter(callbackFunction, myArray){
    const filteredArray = [];
    for (let i = 0; i < myArray.length; i++){
        if(callbackFunction(myArray[i])){
            filteredArray.push(myArray[i]);
        }
    }
    return filteredArray;
}



export default filter