var React          = require('react')
var ReactAddons    = require('react/addons')
var ReactTestUtils = React.addons.TestUtils
 
var reactTestQueryUtil = function (tree) {
    this.tree = tree
}
reactTestQueryUtil.prototype.class = function (cls) {
    this.class = cls
    return this
}
reactTestQueryUtil.prototype.one = function () {
    if (this.class) return ReactTestUtils.findRenderedDOMComponentWithClass(this.tree, this.class)
}
reactTestQueryUtil.prototype.all = function () {
    if (this.class) return ReactTestUtils.scryRenderedDOMComponentsWithClass(this.tree, this.class)
}
 
module.exports = function(tree) { return new reactTestQueryUtil(tree) }
