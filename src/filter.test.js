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
    })
})