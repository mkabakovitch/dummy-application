const { Dummy } = require('@mkabakovitch/dummy-package/dummy')

module.exports = class GreeterService extends cds.ApplicationService {

  greet(person) {
    const dummy = new Dummy();
    return dummy.greet(person);
  }
}

