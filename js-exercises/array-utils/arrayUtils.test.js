import {
  map, forEach, reduce, filter,
} from './arrayUtils';

Array.prototype.customForEach = forEach;
Array.prototype.customMap = map;
Array.prototype.customFilter = filter;
Array.prototype.customReduce = reduce;

describe('arrayUtils -> Map', () => {
  it('Test the map function on array', () => {
    expect(
      [10, 20, 30, 40].customMap(number => number * 5),
    ).toEqual([50, 100, 150, 200]);
  });

  it('Should throw error for not passing callback as function', () => {
    const cb = {};

    expect(() => {
      [1, 2].customMap(cb);
    }).toThrow('callback function is not of type function');
  });
});

describe('arrayUtils -> Filter', () => {
  it('Test the filter function on array', () => {
    expect(
      [1, 2, 3, 4, 5].customFilter((number) => number >= 3),
    ).toEqual([3, 4, 5]);
  });

  it('Should throw error for not passing callback as function', () => {
    const cb = {};

    expect(() => {
      [1, 2].customFilter(cb);
    }).toThrow('callback function is not of type function');
  });
});

describe('arrayUtils -> Reduce', () => {
  it('Test the reduce function on array', () => {
    expect(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].customReduce((sum, number) => sum + number, 0),
    ).toEqual(55);
  });

  it('Should throw error for not passing callback as function', () => {
    const cb = {};

    expect(() => {
      [1, 2].customReduce(cb, 0);
    }).toThrow('callback function is not of type function');
  });

  it('Should throw error for not providing initial value and empty array', () => {
    expect(() => {
      [].customReduce((sum, number) => sum + number);
    }).toThrow('cannot reduce array of length zero with no initial value');
  });
});

describe('arrayUtils -> ForEach', () => {
  it('Test the map function on array', () => {
    /* Using Jest Mock function */
    const mockCallback = jest.fn(x => 42 + x);
    [0, 1].customForEach(mockCallback);
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  it('Should throw error for not passing callback as function', () => {
    const cb = {};

    expect(() => {
      [1, 2].customForEach(cb);
    }).toThrow('callback function is not of type function');
  });
});
