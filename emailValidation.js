function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.[a-z]+)+$/i.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph') === true); // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph') === true); // returns true
console.log(isValidEmail('foo@baz.com') === true); // returns true
console.log(isValidEmail('foo@baz.ph') === true); // returns true
console.log(isValidEmail('HELLO123@baz') === false); // returns false
console.log(isValidEmail('foo.bar@baz.to') === false); // returns false
console.log(isValidEmail('foo@baz.') === false); // returns false
console.log(isValidEmail('foo_bat@baz') === false); // returns false
console.log(isValidEmail('foo@bar.a12') === false); // returns false
console.log(isValidEmail('foo_bar@baz.com') === false); // returns false
console.log(isValidEmail('foo@bar.....com') === false); // returns false
