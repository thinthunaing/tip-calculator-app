//bill 
const bill = document.querySelector('.bill');
console.log(bill)
//amount of people
const peopleEl = document.querySelector('.people-numbers');
//tip amount nodes
const tipEl = document.querySelector('.tip-amount-result');
//total amount nodes
const totalEl = document.querySelector('.total-amount-result');
//reset 
const resetEl = document.querySelector('.reset')


const tipCalculator = (tip) => {
    let total = bill.value;
    let people = peopleEl.value;
    
    let tipAmount = (total*tip)/people;
    let totalAmount = (total/people) + tipAmount;

    tipEl.textContent = tipAmount.toFixed(2);
    totalEl.textContent = totalAmount.toFixed(2);
   

}

//five percent
const fiveEl = document.querySelector('.five-percents');
fiveEl.addEventListener('click', tipCalculator.bind(null,0.05));

//ten percent
const tenEl = document.querySelector('.ten-percents');
tenEl.addEventListener('click', tipCalculator.bind(null,0.10));

//fifteen percent
const fifteenEl = document.querySelector('.fifteen-percents');
console.log(fifteenEl)
fifteenEl.addEventListener('click', tipCalculator.bind(null,0.15));

//twenty-five percent
const tfiveEl = document.querySelector('.tfive-percents');
tfiveEl.addEventListener('click', tipCalculator.bind(null,0.25));

//fifty percent
const fiftyEl = document.querySelector('.fifty-percents');
fiftyEl.addEventListener('click', tipCalculator.bind(null,0.50));

//custom 
const customEl = document.querySelector('.custom-value');
customEl.addEventListener('change',function(){
    let tip = customEl.value;
    tipCalculator(tip/100)
})

//reset value
resetEl.addEventListener('click',function(){
    tipEl.textContent= '';
    totalEl.textContent= '';

})