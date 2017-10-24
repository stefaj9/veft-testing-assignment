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
