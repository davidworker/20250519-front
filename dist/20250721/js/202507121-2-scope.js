// g3
let g1 = 10; // 0x00
let g2 = 200; // 0x01

console.log(g1); // 0x00

function showG1() {
    console.log(`show G1: ${g1}`); // 0x00
}

showG1();
showG2();

function showG2() {
    let g2 = 20; // 0x03
    g3 = 300; // 0x04 會升級回 global 的 g3 勿使用
    console.log(`show G2: ${g2}`); // 0x03
    console.log(`show G3: ${g3}`); // 0x04
} // 0x03 die.

console.log(g2); // 0x01

console.log(g3); // 0x04

(() => {
    let a = 10;
    console.log(`closure1 a: ${a}`);
})();
(() => {
    let a = 20;
    console.log(`closure2 a: ${a}`);
})();

// console.log(a);

// let a = 30;
// console.log(`global a: ${a}`);

// let a = 40;
// console.log(`global a: ${a}`);

// function demo() {
//     console.log("demo!");
// }

const demo = function () {
    console.log("use const demo");
};

const demo2 = () => {};

demo();

demo = 123;

demo();
