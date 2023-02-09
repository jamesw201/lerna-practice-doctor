'use strict';

const patient = require('..');
const assert = require('assert').strict;

assert.strictEqual(patient(), 'Hello from patient');
console.info("patient tests passed");
