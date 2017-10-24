const index = require('./index');

describe('add' , () => {
  test('add', () => {
    expect(index.add(1,0)).toBe(1);
  });

  test('add', () => {
    expect(index.add(null,1)).toBe(1);
  });

  test('add', () => {
    expect(index.add()).toBeNaN();
  });
});
