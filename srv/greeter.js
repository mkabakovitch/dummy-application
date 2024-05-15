const { Greeter } = require('@mkabakovitch/dummy/greeter')

module.exports = class GreeterService extends cds.ApplicationService {

  greet(person) {
    const greeter = new Greeter();
    return greeter.greet(person);
  }
}

