'use strict'
//        1 1 2 3 4 5 1 2  3  4  5  1   2   3       
// calls = 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
let n = 19;
const t1 = performance.now();
var yourself = {
    fibonacci: function(n) {
        if (n === 0 || n === 1) {
            return n;
        } else {
            return this.fibonacci(n - 1) +
                this.fibonacci(n - 2);
        }
    }
};
for (let i = 0; i < n; i++)
    console.log(yourself.fibonacci(i));
const t2 = performance.now();

const t3 = performance.now();
var yourself2 = {
    fibonacci: function(n) {
        if (n === 0 || n === 1)
            return n;
        let a = 0,
            b = 1,
            c = 0;
        for (let i = 0; i < n; i++) {
            a = c;
            c = b;
            b += a;
        }
        return c
    }
}
for (let i = 0; i < n; i++)
    console.log(yourself2.fibonacci(i));
const t4 = performance.now();

const t5 = performance.now();
var yourself3 = {
    fibonacci: function(n) {
        if (n === 0 || n === 1) {
            return n;
        }
        return (this.fibonacci(n - 1) * (2 * Math.cos(Math.PI / 5))).toFixed(0);
    }
}
for (let i = 0; i < 9; i++)
    console.log(yourself3.fibonacci(i));
const t6 = performance.now();


console.log(`Call1 took: ${t2 - t1} milliseconds.`);
console.log(`Call2 took: ${t4 - t3} milliseconds.`);
console.log(`Call3 took: ${t6 - t5} milliseconds.`);
