const cds = require('@sap/cds')
const Greeter = require('@mkabakovitch/dummy-package/greeter')

describe('Dummy CAP Service', () => {

  const { GET } = cds.test(__dirname + '/..')

  describe('Greeter Service', () => {

    const max = 'Max';

    test('greet', async () => {
      const { data } = await GET`/odata/v4/greeter/greet(person=${max})`;
      const greeter = new Greeter();
      const expected = greeter.greet(max);
      const actual = data.value;
      expect(expected).toEqual(actual);
    });

  });

  describe('Calculator Service', () => {

    describe('Operations', () => {

      test('add random numbers', async () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        const { data } = await GET`/odata/v4/calculator/add(a=${a},b=${b})`;
        const expected = a + b;
        const actual = data.value;
        expect(expected).toEqual(actual);
      });

      test('substract random numbers', async () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        const { data } = await GET`/odata/v4/calculator/substract(a=${a},b=${b})`;
        const expected = a - b;
        const actual = data.value;
        expect(expected).toEqual(actual);
      });

      test('multiply random numbers', async () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        const { data } = await GET`/odata/v4/calculator/multiply(a=${a},b=${b})`;
        const expected = a * b;
        const actual = data.value;
        expect(expected).toEqual(actual);
      });

      test('divide random numbers', async () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        const { data } = await GET`/odata/v4/calculator/divide(a=${a},b=${b})`;
        const expected = a / b;
        const actual = data.value;
        expect(expected).toEqual(actual);
      });

    });

    describe('Constants', () => {

      test('get pi', async () => {
        const { data } = await GET`/odata/v4/calculator/getPi()`;
        const expected = Math.PI;
        const actual = data.value;
        expect(expected).toEqual(actual);
      });

    });

  });
});