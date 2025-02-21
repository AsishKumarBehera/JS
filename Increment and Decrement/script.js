const count = document.querySelector('.count');
const downBtn = document.querySelector('.down');
const upBtn = document.querySelector('.upp');
const inputNum = document.querySelector('.inp');
const reset = document.querySelector('.reset');

upBtn.addEventListener('click', () => {
    const cont = parseInt(count.innerText);
    // console.log(inputNum)
    const input = parseInt(inputNum.value)
    count.innerText = cont + input;
})

downBtn.addEventListener('click', () => {
    const cont = parseInt(count.innerText)
    const input = parseInt(inputNum.value)
    count.innerText = cont - input;
})
reset.addEventListener('click', () => {
    count.innerText = 0;
})