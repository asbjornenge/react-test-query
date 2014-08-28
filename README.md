# React-test-query

React-test-query is a wrapper for the [reactjs](http://facebook.github.io/react/index.html) test [utilities](http://facebook.github.io/react/docs/test-utils.html).

It offers a slightly simple API imho.

## Install

    npm install react-test-query

## Usage

    var q = require('react-test-query')

    // Make a renderer
    var render = q.makeRenderer(Component, {}, document.body)

    var _tree = render({}, function() {
        // Query by class
        var _comp  = q(_tree)('.myComponentClass').one()
        var _comps = q(_tree)('.myComponentClass').all()

        // Query by tag
        var _comp  = q(_tree)('div').one()
        var _comps = q(_tree)('div').all()

        // Query by Component
        var _comp  = q(_tree)(Component).one()
        var _comps = q(_tree)(Component).all()
    })

## Docs

For full documentation see the [spec](https://github.com/asbjornenge/react-test-utils/blob/master/test/spec.js).

enjoy.
