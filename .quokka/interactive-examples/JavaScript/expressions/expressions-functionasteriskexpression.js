function* foo() {
  yield 'a';
  yield 'b';
  yield 'c';
}

var str = "";
for (let val of foo()) {
  str = str + val;
}

console.log(str);
// expected output: "abc"