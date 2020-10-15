import { count, cycle, repeat } from './iterInfinite';

function take(iterable, n) {
  let i = 1;
  const result = [];
  for (const el of iterable) {
    if (i > n) {
      return result;
    }
    i += 1;
    result.push(el);
  }
  return result;
}

describe('count', () => {
  it('Test with given step', () => {
    const take5WithStep1 = take(count(10, 1), 5);
    const take5WithStep2 = take(count(10, 2), 5);
    const take5WithStep3 = take(count(10, 3), 5);
    expect(take5WithStep1).toStrictEqual([10, 11, 12, 13, 14]);
    expect(take5WithStep2).toStrictEqual([10, 12, 14, 16, 18]);
    expect(take5WithStep3).toStrictEqual([10, 13, 16, 19, 22]);
  });

  it('Test when step is not given', () => {
    const take5WithoutStep = take(count(10), 5);
    expect(take5WithoutStep).toStrictEqual([10, 11, 12, 13, 14]);
  });

  it('Test for invalid parameters', () => {
    expect(() => count('str').next()).toThrowError(TypeError, /str is not a number/);
    expect(() => count(10, 'step').next()).toThrowError(TypeError, /step is not a number/);
    expect(() => count().next()).toThrowError(TypeError, /undefined is not a number/);
  });
});

describe('cycle', () => {
  it('Test cycle with `n` number of times.', () => {
    const cycle3Times = take(cycle('ABCD', 3), 20);
    expect(cycle3Times).toStrictEqual([
      'A', 'B', 'C', 'D',
      'A', 'B', 'C', 'D',
      'A', 'B', 'C', 'D',
    ]);

    const cycle2Times = take(cycle('ABCD', 2), 20);
    expect(cycle2Times).toStrictEqual([
      'A', 'B', 'C', 'D',
      'A', 'B', 'C', 'D',
    ]);
  });

  it('Test cycle Infinite times', () => {
    const cycleInfiniteTimes = take(cycle('ABCD'), 15);
    expect(cycleInfiniteTimes).toStrictEqual([
      'A', 'B', 'C', 'D',
      'A', 'B', 'C', 'D',
      'A', 'B', 'C', 'D',
      'A', 'B', 'C',
    ]);
  });

  it('Test cycle for invalid parameters', () => {
    expect(() => cycle().next()).toThrowError(TypeError, /undefined is not a iterable/);
    expect(() => cycle({ someKey: 'SomeValue', someAnotherKey: 'ItsValue' }).next()).toThrowError(TypeError, /{ someKey: 'SomeValue', someAnotherKey: 'ItsValue' } is not a iterable/);
    expect(() => cycle('abc', 'cd').next()).toThrowError(TypeError, /cd is not a number/);
  });
});

describe('repeat', () => {
  it('Test repeat with `n` number of times.', () => {
    const repeat3Times = take(repeat(10, 3), 20);
    expect(repeat3Times).toStrictEqual([10, 10, 10]);
    const repeat2Times = take(repeat(undefined, 2), 20);
    expect(repeat2Times).toStrictEqual([undefined, undefined]);
  });

  it('Test repeat with infinite number of times.', () => {
    const repeatInfiniteTimes = take(repeat(10), 5);
    expect(repeatInfiniteTimes).toStrictEqual([10, 10, 10, 10, 10]);
  });

  it('Test repeat for invalid parameters', () => {
    expect(() => repeat('abc', 'cd').next()).toThrowError(TypeError, /cd is not a number/);
  });
});
