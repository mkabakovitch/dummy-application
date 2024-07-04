const { Greeter } = require('@mkabakovitch/dummy/greeter');

class GreeterService extends cds.ApplicationService {

  greet(person) {
    const greeter = new Greeter();
    return greeter.greet(person);
  }
}

module.exports = GreeterService;