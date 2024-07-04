const Mathematics = require('@mkabakovitch/dummy/mathematics');

class CalculatorService extends cds.ApplicationService {

  add(a, b) {
    const mathematics = new Mathematics();
    return mathematics.add(a, b);
  }

  substract(a, b) {
    const mathematics = new Mathematics();
    return mathematics.substract(a, b);
  }

  multiply(a, b) {
    const mathematics = new Mathematics();
    return mathematics.multiply(a, b);
  }

  divide(a, b) {
    const mathematics = new Mathematics();
    return mathematics.divide(a, b);
  }

  getPi() {
    return Mathematics.pi;
  }
}

module.exports = CalculatorService;