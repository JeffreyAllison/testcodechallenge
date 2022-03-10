// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
    getRandomNumber,
    //getRandomNumber,
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
    const expected = 6;

    const actual = multiplyBy12ThenHalve(1, 12, 2);

    expect.equal(actual, expected, '1 times 12 divided by 2 is 6');

    const expected2 = 612;

    const actual2 = multiplyBy12ThenHalve(102, 12, 2);

    expect.equal(actual2, expected2, '102 times 12 divided by 2 is 612');

    const expected3 = 27270;

    const actual3 = multiplyBy12ThenHalve(4545, 12, 2);

    expect.equal(actual3, expected3, '4545 times 12 divided by 2 is 27270');
});

test('divideThenMultiply', (expect) => {
    const expected = 30;

    const actual = divideThenMultiply(12, 2, 5);

    expect.equal(actual, expected, '12 divided by 2 times 5 is 30');

    const expected2 = 9000000;

    const actual2 = divideThenMultiply(4500, 500, 1000000);

    expect.equal(actual2, expected2, '4500 divided by 500 times 1000000 is 9000000');

    const expected3 = 441;

    const actual3 = divideThenMultiply(42, 2, 21);

    expect.equal(actual3, expected3, '42 divided by 2 times 21 is 441');
});

test('returnAsAnArray', (expect) => {
    const expected = [1, 2, 3];

    const actual = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual, expected, '1, 2, 3 is displayed as an array');

    const expected2 = [4, 5, 6];

    const actual2 = returnAsAnArray(4, 5, 6);

    expect.deepEqual(actual2, expected2, '4, 5, 6 is displayed as an array');

    const expected3 = [7, 8, 9];

    const actual3 = returnAsAnArray(7, 8, 9);

    expect.deepEqual(actual3, expected3, '7, 8, 9 is displayed as an array');

});

test('returnAsAString', (expect) => {
    const expected = (145);

    const actual = returnAsAString([1] + [4] + [5]);

    expect.equal(actual, expected, '145 is a string because inputs are [1]+[4]+[5}');

    const expected2 = (256);

    const actual2 = returnAsAString([2] + [5] + [6]);

    expect.equal(actual2, expected2, '256 is a string because inputs are [2]+[5]+[6}');

    const expected3 = (367);

    const actual3 = returnAsAString([3] + [6] + [7]);

    expect.equal(actual3, expected3, '367 is a string because inputs are [3]+[6]+[7}');
});

test('makeLuckyGreeting', (expect) => {
    const expected = ('Your lucky number for the day is 12');

    const actual = makeLuckyGreeting(5, 7);

    expect.equal(actual, expected, 'message + 12 is because number1 and number2 are generated as a String');

    const expected2 = ('Your lucky number for the day is 16');

    const actual2 = makeLuckyGreeting(8, 8);

    expect.equal(actual2, expected2, 'message + 16 is because number1 and number2 are generated as a String');

    const expected3 = ('Your lucky number for the day is 15');

    const actual3 = makeLuckyGreeting(5, 10);

    expect.equal(actual3, expected3, 'message + 12 is because number1 and number2 are generated as a String');


});

test('getSecondItem', (expect) => {
    const expected = 'cats';

    const actual = getSecondItem(['dogs', 'cats', 'ants', 'worms']);

    expect.equal(actual, expected, 'cats');
});

test('getLastItem', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected, 'returns 10 as 10 is the last array item');
});

test('getRandomNumber', (expect) => {
    const actual = getRandomNumber();

    const number1234Or5 = actual === 1 || actual === 2 || actual === 3 || actual === 4 || actual === 5;

    expect.equal(number1234Or5, true, 'returns a number randomly between 0 and 5');
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

