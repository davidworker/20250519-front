let x = 10;
let y = "5";

let n1 = x + y;
let n2 = x - y;
let n3 = x * y;
let n4 = x / y;
let n5 = x % y;

let formatOutput = `
${x} + ${y} = ${n1}
${x} - ${y} = ${n2}
${x} * ${y} = ${n3}
${x} / ${y} = ${n4}
${x} % ${y} = ${n5}
`;
console.log(formatOutput);
console.log(n2, typeof n2);

let s1 = 10;
// let s2 = s1++;
let s2 = ++s1;

console.log(s1, s2);
