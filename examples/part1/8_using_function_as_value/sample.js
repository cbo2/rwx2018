let f = function() { //better to use const
  console.log('f called...');
}

f();

f = function() {  //if f is const, we can't do this
  console.log('f redefined...');
}

f();