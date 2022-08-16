// Advice generator code
const result = document.getElementById('advice-text');
const number = document.getElementById('advice-number');
const button = document.getElementById('advice-generator');

button.addEventListener('click', function () {
    getAdvice();

});

// If i would like to have a different advice on page load i could use this
// addEventListener('load', function () {
//     getAdvice();
// });

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObject = adviceData.slip;
        number.innerHTML = adviceObject.id;
        result.innerHTML = adviceObject.advice;
    }).catch(error => {
        console.log(error);
    });
}

