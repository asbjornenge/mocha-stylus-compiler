var assert    = require('assert')
var app_style = require('./app')

it('enables requiring of stylus files', function() {
    assert(app_style.indexOf('background-color:') >= 0)
})
