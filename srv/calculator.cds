namespace mkabakovitch.playground;

service CalculatorService {
  function add(a : Integer, b : Integer)       returns Integer;
  function substract(a : Integer, b : Integer) returns Integer;
  function multiply(a : Integer, b : Integer)  returns Integer;
  function divide(a : Integer, b : Integer)    returns Double;
  function getPi()                             returns Double;
}
