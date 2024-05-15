const Mathematic = require('@mkabakovitch/dummy/mathematic')

module.exports = class CalculatorService extends cds.ApplicationService {

  add(a, b) {
    const mathematic = new Mathematic();
    return mathematic.add(a, b);
  }

  substract(a, b) {
    const mathematic = new Mathematic();
    return mathematic.substract(a, b);
  }

  multiply(a, b) {
    const mathematic = new Mathematic();
    return mathematic.multiply(a, b);
  }

  divide(a, b) {
    const mathematic = new Mathematic();
    return mathematic.divide(a, b);
  }

  getPi() {
    return Mathematic.pi;
  }
}

