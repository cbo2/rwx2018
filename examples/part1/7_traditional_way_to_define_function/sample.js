function f() {
  console.log('f called...');
}

f();               //oops

function f() {
  console.log('f redefined');
}

f();

//f is hoisted to the top of the scope
//and line 7 is resetting that value of f