const { describe, it } = require('mocha');
const dates = require('../utils/datetime.util');
const assert = require('chai').assert;

describe('Homework1 TestSuite', () => {
    it('Current date checking', () => {
        assert.equal(dates.today(), '04/24/2019');
    });

    it('Set year', () => {
        assert.equal(dates.setYear(2000), '04/24/2000');
    });

    it('Differencies between dates', () => {
        const date1 = new Date('12/13/2010');
        const date2 = new Date('12/15/2010');
        dates.daysDifference(date1, date2);
        console.log(date2);
    });
});