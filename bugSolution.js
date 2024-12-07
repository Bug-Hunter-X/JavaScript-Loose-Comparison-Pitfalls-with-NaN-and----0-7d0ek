function foo(a, b) {
  if (Object.is(a, b)) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); //false
console.log(foo(0, -0));  //false
console.log(foo(0, +0));  //true