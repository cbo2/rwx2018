//let has block scope
//let does not permit redefinition

let a = 1;
console.log(a);

{
  let b = 4;
  console.log(b);
}

console.log(a);
//console.log(b); //ERROR

//let a = "hello"; //ERROR
a = 7;       //OK to reassign, but not redefine
console.log(a);