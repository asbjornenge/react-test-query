require('testdom')('<html><body></body></html>')
var assert    = require('assert')
var React     = require('react')
var Component = require('./comp')
var q         = require('../index')
var render    = q.makeRenderer(Component, {}, document.body)

describe('ReactTestQuery', function () {

    var afterEach = function(done) {
        React.unmountComponentAtNode(document.body)
        document.body.innerHTML = ""
        setTimeout(done)
    }

    it('can query components by class',function (done) {
        var _tree = render({}, function () {
            var _component  = q(_tree)('.testComponent').one()
            var _components = q(_tree)('.testComponent').all()
            assert(_component != undefined)
            assert(_components.length == 1)
            done()
        })
    })

    it('can query components by tag', function (done) {
        var _tree = render({}, function () {
            var _component  = q(_tree)('div').one()
            var _components = q(_tree)('div').all()
            assert(_component != undefined)
            assert(_components.length == 1)
            done()
        })
    })


    it('can query components by type', function (done) {
        var _tree = render({}, function () {
            var _component  = q(_tree)(Component).one()
            var _components = q(_tree)(Component).all()
            assert(_component != undefined)
            assert(_components.length == 1)
            done()
        })
    })


})
