let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

function sum(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    } else {
        return alert('Error');
    }
}

button.addEventListener('click', () => {
    alert(sum(input1.value, input2.value));
})
