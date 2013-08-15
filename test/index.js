
var mixture = require('..');

describe('mixture', function(){

  describe('mixture(html, css)', function(){
    it('should mix them', function(){
      mixture('<p></p>', 'p { color: red; font-size: 16px }')
      .should.equal('<p style="color: red; font-size: 16px;"></p>');
    })
  })

})
