const index = require('./index');

describe('add function' , () => {
  test('add 1 + 1', () => {
    expect(index.add(1,1)).toBe(2);
  });

  test('add null + 1', () => {
    expect(index.add(null,1)).toBe(1);
  });

  test('add empty', () => {
    expect(index.add()).toBeNaN();
  });
});

/*
var automock = require('automock');

automock.setStubCreator(jasmine.createSpy);

var index2 = automock.require('./index.js');

describe('throw function' , () => {
  test('throw not throw', () => {
    index2.doIt();

    expect(index2.throws()).toBeNull();

  });
});
*/

describe('loop function', () => {
  test('loop 0', () => {
    expect(index.loop(0)).toBe(0);
  });

  test('loop 2', () => {
    expect(index.loop(2)).toBe(6);
  });

  test('loop 420', () => {
    expect(index.loop(420)).toBe(352380);
  });
});