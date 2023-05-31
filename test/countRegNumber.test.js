
describe('countRegNumber' , function(){
    
    it('returns the number of registration' , function(){
        var regCount = countRegNumber('CA 182736')
assert.equal(regCount, 1);
    });

});