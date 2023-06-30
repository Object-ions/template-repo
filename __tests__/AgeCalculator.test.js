import AgeCalculator from '../src/js/AgeCalculator.js';

describe('ageCalculator', () => {
  let ageCalculator;
  beforeEach(() => {
    ageCalculator = new AgeCalculator(2023, 1992);
  });
  test('should correctly create a calculator object with two instances', () => {
    expect(ageCalculator.currentYear).toEqual(2023);
    expect(ageCalculator.birthYear).toEqual(1992);
  });

  test('should correctly calculate age on Earth', () => {
    let earthAge = ageCalculator.EarthAge();
    expect(earthAge).toEqual(31);
  });

  test('should correctly calculate age on Mercury. Mercury age is 0.24 Earth years.', () => {
    let mercuryAge = ageCalculator.MercuryAge();
    expect(mercuryAge).toBeCloseTo(129.17);
  });

  test('should correctly calculate age on Venus. Venus age is 0.62 Earth years.', () => {
    let venusAge = ageCalculator.VenusAge();
    expect(venusAge).toBeCloseTo(50);
  });

  test('should correctly calculate age on Mars. Mars age is 1.88 Earth years.', () => {
    let marsAge = ageCalculator.MarsAge();
    expect(marsAge).toBeCloseTo(16.49);
  });

  test('should correctly calculate age on Jupiter. Jupiter age is 11.86 Earth years.', () => {
    let jupiterAge = ageCalculator.JupiterAge();
    expect(jupiterAge).toBeCloseTo(2.61);
  });
});