import filter from './filter';


describe('filter', ()=>{
    describe('Given a callback function and an array', ()=> {
        it('invokes the callback function once per item in the array', ()=>{
            const arrayToFilter = [1, 2, 3]
            const numberOfItemsToFilter = arrayToFilter.length    
            const callBackFunction = jest.fn()

            filter(callBackFunction, arrayToFilter)
            expect(callBackFunction).toHaveBeenCalledTimes(numberOfItemsToFilter)
        })
        it('invokes the callback function passing it an item from the array as a paramater', ()=>{
            const callBackFunction = jest.fn()
            const arrayToFilter = [5, 3, 4]

            filter(callBackFunction, arrayToFilter);
            expect(callBackFunction).nthCalledWith(1, 5)
            expect(callBackFunction).nthCalledWith(2, 3)
            expect(callBackFunction).nthCalledWith(3, 4)
        })
        it('returns an array', ()=> {
            const callbackFunction = jest.fn()
            const arrayToFilter = [5, 3, 4]

            const returnValue = filter(callbackFunction, arrayToFilter)
            expect(returnValue).toBeInstanceOf(Array)
        })
        it('returns a new array', ()=>{
            const callBackFunction = jest.fn()
            const arrayToFilter = [5, 3, 4]
            
            const returnValue = filter(callBackFunction, arrayToFilter)
            expect(returnValue).not.toBe(arrayToFilter)
        })
        it('returns an array of items for which the callback function is truthy', ()=>{
            const callBackFunction = (item) => item >= 4;
            const arrayToFilter = [5, 1, 4, 3, 2, 9, 12, 20];

            const expectedArray = arrayToFilter.filter(callBackFunction);
            const returnedArray = filter(callBackFunction, arrayToFilter);
            expect(returnedArray).toEqual(expectedArray);
        })
    })
})