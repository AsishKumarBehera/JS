(function(){
const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const result = document.querySelector('.output')
const allGauss = document.querySelector('.all-guesses')
const submitBtn = document.querySelector('.submit-btn')
const startBtn = document.querySelector('.start-game')
const allGaussesArray = []

let randomNumber = Math.round(Math.random() * 100)
console.log(randomNumber)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('sumitted');
    const userInputValue = parseInt(userInput.value)
    if(randomNumber > userInputValue){
        result.innerText = 'Too Low';
    } else if(randomNumber < userInputValue){
        result.innerText = 'Too High';
    }else{
        result.innerText = 'Congrats';
        startBtn.disabled = false;
        submitBtn.disabled = true;
    }
    allGaussesArray.push(userInputValue)
    allGauss.innerText = 'Your guesses:' + allGaussesArray.join(',')
    form.reset()
})

startBtn.addEventListener('click', () => {
    result.innerText = '';
    allGauss.innerText = '';
    startBtn.disabled = true;
    submitBtn.disabled = false;
    randomNumber = Math.round(Math.random() * 100)
})
})()

// let arr1 = 'Asish'
// let arr2 = ''

// for(let i = arr1.length - 1 ; i >= 0; i--){
//     arr2 = arr2 + arr1[i]
// }

// console.log(arr2)