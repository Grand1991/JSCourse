const { describe, it } = require('mocha');
const logger = require('../utils/log.util');

describe('Hello world TestSuite', () => {
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    });
});