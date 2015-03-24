var fs     = require('fs')
var stylus = require('stylus')
var esc    = require('js-string-escape')
var exts   = ['.styl']
var orig   = require.extensions['.js']

var loader = function(ext, module, filename) {
    if (filename.indexOf('node_modules') >= 0) return orig(module, filename)
    var content = fs.readFileSync(filename, 'utf-8')
    var css = stylus(content).render()
    return module._compile('module.exports="'+esc(css)+'"', filename)
}

exts.forEach(function(ext) {
    require.extensions[ext] = loader.bind(undefined, ext) 
})
