var React          = require('react')
var ReactAddons    = require('react/addons')
var ReactTestUtils = React.addons.TestUtils
var _              = require('lodash')

var reactTestQueryUtil = function (tree) {
    this.tree = tree
    return this.query.bind(this)
}
reactTestQueryUtil.prototype.query = function (query) {
    if (typeof query == 'function')                  { this.comp  = query; return this}
    if (typeof query == 'string' && query[0] == '.') { this.class = query.slice(1,query.length); return this }
    if (typeof query == 'string')                    { this.tag   = query; return this }
    return this
}
reactTestQueryUtil.prototype.one = function () {
    if (this.comp)  return ReactTestUtils.findRenderedComponentWithType(this.tree, this.comp)
    if (this.class) return ReactTestUtils.findRenderedDOMComponentWithClass(this.tree, this.class)
    if (this.tag)   return ReactTestUtils.findRenderedDOMComponentWithTag(this.tree, this.tag)
}
reactTestQueryUtil.prototype.all = function () {
    if (this.comp)  return ReactTestUtils.scryRenderedComponentsWithType(this.tree, this.comp)
    if (this.class) return ReactTestUtils.scryRenderedDOMComponentsWithClass(this.tree, this.class)
    if (this.tag)   return ReactTestUtils.scryRenderedDOMComponentsWithTag(this.tree, this.tag)
}

var moduleWrapper = function (tree) { return new reactTestQueryUtil(tree) }
moduleWrapper.makeRenderer = function (Component, defaultProps, target) {
    return function(newProps, callback) {
        var props = _.merge(_.clone(defaultProps), newProps)
        return React.renderComponent(Component(props), target, function() {
            if (typeof callback === 'function') setTimeout(callback)
        })
    }
}

module.exports = moduleWrapper
