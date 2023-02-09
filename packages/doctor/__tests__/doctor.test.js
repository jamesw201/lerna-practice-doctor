'use strict';

const doctor = require('..');
const assert = require('assert').strict;

assert.strictEqual(doctor(), 'Hello from doctor');
console.info("doctor tests passed");
