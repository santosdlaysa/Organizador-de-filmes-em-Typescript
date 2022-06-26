"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function sum(n1, n2) {
    return n1 + n2;
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    if (input1 && input2) {
        alert(sum(Number(input1.value), Number(input2.value)));
    }
});
