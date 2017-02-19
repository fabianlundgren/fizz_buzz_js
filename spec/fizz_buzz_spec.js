describe("FizzBuzz", function() {
var calculator;


beforeEach(function() {
calculator = new FizzBuzz();
});

it("Should return fizz if number is devisable by 3", function() {
  expect(calculator.fizzbuzz_calculator(3)).toEqual('Fizz');
});

it("Should return buzz if number is devisable by 5", function() {
  expect(calculator.fizzbuzz_calculator(5)).toEqual('Buzz');
});

it("Should return Fizzbuzz if number is devisable by 15", function() {
  expect(calculator.fizzbuzz_calculator(15)).toEqual('FizzBuzz');

 });
});
