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
        it.todo('returns an array')
        it.todo('returns a new array')
        it.todo('returns an array of items for which the callback function is truthy')
    })
})