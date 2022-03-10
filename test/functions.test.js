// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit', '!!!');

    expect.equal(actual, expected, 'bunny rabbit should appear as bunny rabbit!!!');

    const expected2 = 'green!!!';

    const actual2 = addExclamationPoints('green', '!!!');

    expect.equal(actual2, expected2, 'green should appear as green!!!');

    const expected3 = 'yup!!!';

    const actual3 = addExclamationPoints('yup', '!!!');

    expect.equal(actual3, expected3, 'yup should appear as yup!!!');
});

test('multiplyBySeven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4, 7);

    expect.equal(actual, expected, '4 times 7 is 28');

    const expected2 = 56;

    const actual2 = multiplyBySeven(8, 7);

    expect.equal(actual2, expected2, '8 times 7 is 56');

    const expected3 = 14;

    const actual3 = multiplyBySeven(2, 7);

    expect.equal(actual3, expected3, '2 times 7 is 14');
});

test('multiplyBy12ThenHalve', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4, 7);

    expect.equal(actual, expected, '4 times 7 is 28');
});






skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

