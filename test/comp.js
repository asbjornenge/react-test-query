var React  = require('react')

var TestComponent = React.createClass({
    render : function () {
        return React.DOM.div({
            className : 'testComponent'
        })
    }
})

module.exports = TestComponent
