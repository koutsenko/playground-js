class Test {
  static print() {
      console.log('print');
  }

  foo() {
      console.log('foo');
  }
}

const test = new Test()

// Способы вывести print
Test.print();

// Способы вывести foo
test.foo();
test.__proto__.foo(); 
Test.prototype.foo();
