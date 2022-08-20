'use strict'
//        1 1 2 3 4 5 1 2  3  4  5  1   2   3       
// calls = 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
let n = 19;
const t1 = performance.now();
var call = {
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
    console.log(call.fibonacci(i));
const t2 = performance.now();

const t3 = performance.now();
var call2 = {
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
    console.log(call2.fibonacci(i));
const t4 = performance.now();

const t5 = performance.now();
var call3 = {
    fibonacci: function(n) {
        if (n === 0 || n === 1) {
            return n;
        }
        if (n == 2)
            return 1;
        return (this.fibonacci(n - 1) * (2 * Math.cos(Math.PI / 5))).toFixed(0);
    }
}
for (let i = 0; i < n; i++)
    console.log(call3.fibonacci(i));
const t6 = performance.now();


console.log(`Call1 took: ${t2 - t1} milliseconds.`);
console.log(`Call2 took: ${t4 - t3} milliseconds.`);
console.log(`Call3 took: ${t6 - t5} milliseconds.`);
