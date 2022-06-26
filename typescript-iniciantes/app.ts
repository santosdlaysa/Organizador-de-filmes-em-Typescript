let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function sum(n1: number, n2: number) {
    return n1 + n2;
}

button?.addEventListener('click', () => {
    if (input1 && input2) {
        alert(sum(Number(input1.value), Number(input2.value)));
    }
});