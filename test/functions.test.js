// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    multiplyBySeven,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit', '!!!');

    expect.equal(actual, expected, 'bunny rabbit should appear as bunny rabbit!!!');
});

test('mutiplybySeven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4, 7);

    expect.equal(actual, expected);
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

