var assert = require("assert")
var hl = require("../lib/handlers.js");

var params = { a: '4', b: '3', count: '10' };

describe('Test getValidParams', function(){
    it('should return false or params when the httpget params is or not present', function(){
      assert.equal(hl.getValidParams( '/sample.html' ), false);
      assert.notDeepEqual(hl.getValidParams('/sample.html?a=4&b=3&count=10'), false);
      assert.deepEqual(hl.getValidParams('/sample.html?a=4&b=3&count=10'), params);
      
    })
});


