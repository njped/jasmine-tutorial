describe("MathUtils", () => {
  let mathUtils;

  beforeEach(() => {
    mathUtils = new MathUtils()
  })

  describe('add', () => {
    it('it should add two numbers', () => {
      expect(mathUtils.add(1,2)).toBe(3)
    });
    it('it should add negative numbers', () => {
      expect(mathUtils.add(-1, -2)).toBe(-3)
    });
    it('it should add big numbers', () => {
      expect(mathUtils.add(250, 90)).toBe(340)
    });
    it('it should add decimal numbers', () => {
      expect(mathUtils.add(.2, 1.5)).toBe(1.7)
    });
    it('it should add negative and postive numbers', () => {
      expect(mathUtils.add(-1, 2)).toBe(1)
      expect(mathUtils.add(-2, 2)).toBe(0)
      expect(mathUtils.add(-4, 2)).toBe(-2)
    });
    it('it should handle strings', () => {
      expect(mathUtils.add('not', 'numbers')).toBe('notnumbers')
    });
  })

  describe('subtract', () => {
    it('it should subtract two numbers', () => {
      expect(mathUtils.subtract(2,1)).toBe(1)
    })
    it('it should throw and error with non-numbers', () => {
      expect(() => {mathUtils.subtract('not', 'numbers')}).toThrow()
      expect(() => {mathUtils.subtract(null, 1)}).toThrow()
      expect(() => {mathUtils.subtract(1, false)}).toThrow()
      expect(() => {mathUtils.subtract({ a:1 }, false)}).toThrow()
  })
})

  describe('average', () => {
    it('it should average two numbers', () => {
      expect(mathUtils.average(1, 3)).toBe(2)
    })
    it('it should average the same numbers', () => {
      expect(mathUtils.average(8,8,8,8,8,8,8,8)).toBe(8)
    })
    it('it should average decimal numbers', () => {
      expect(mathUtils.average(-0.1, 0, .1)).toBe(0)
      expect(mathUtils.average(0.1, .2)).toBeCloseTo(0.15)
    })
    it('it should throw and error with non-numbers', () => {
      expect(() => {mathUtils.average('not', 'numbers')}).toThrow()
      expect(() => {mathUtils.average(null, 1)}).toThrow()
      expect(() => {mathUtils.average(1, false)}).toThrow()
      expect(() => {mathUtils.average({ a:1 }, false)}).toThrow()
  })
  })

});