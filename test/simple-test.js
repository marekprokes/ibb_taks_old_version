var assert = require('assert');
var hl = require('../lib/handlers.js');



function testGetValidParams(){

  var url_params = '/sample.html?a=4&b=3&count=10';
  var url_quest = '/sample.html?';
  var url = '/sample.html';
  var params = { a: '4', b: '3', count: '10' };
   
  try {
      assert.equal(hl.getValidParams( url ), false);
      assert.notDeepEqual(hl.getValidParams(url), params);

      assert.equal(hl.getValidParams(url_quest), false);
      assert.notDeepEqual(hl.getValidParams(url_quest), params);

      assert.notDeepEqual(hl.getValidParams(url_params), false);
      assert.deepEqual(hl.getValidParams(url_params), params);

      console.log('Tests GetUrlParams passed OK');

  } catch (err) { console.log('Test Failed' + '   ' + err); }

};

testGetValidParams();
