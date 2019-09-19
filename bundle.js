'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

var version = "1.0.0";

function main () {
    console.log(
        _.join([5, 6], ', ')
    );
    console.log('version ' + version);
}

module.exports = main;
