function addTaka() {
    const takaInput = document.getElementById('Taka-field');
    const takaField = document.getElementById('taka-balance');
    let prev = parseInt(takaField.innerText);
    let current = prev + parseInt(takaInput.value);
    takaField.innerText = current;
    localStorage.setItem('Taka-Balance', current);
    takaInput.value = '';
    let cupBalance = parseInt(parseInt(document.getElementById('taka-balance').innerText) / 15);
    document.getElementById('cup-balance').innerText = cupBalance;
    localStorage.setItem('cup-balance', cupBalance);
    displayNote();


}
localStorage.setItem('Taka-Balance',0);
localStorage.setItem('cup-balance', 0);
document.getElementById('taka-balance').innerText = localStorage.getItem('Taka-Balance');
document.getElementById('cup-balance').innerText = localStorage.getItem('cup-balance');

function reset() {
    document.getElementById('taka-balance').innerText = 0;
    document.getElementById('cup-balance').innerText = 0;
    document.getElementById('cup').innerText = 0;
    displayNote();

}
function addCup() {
    const cup = document.getElementById('cup');
    const cupField = document.getElementById('cup-field');
    const takaBalance = document.getElementById('taka-balance');
    cup.innerText = cupField.value;
    let money = parseInt(takaBalance.innerText);
    let updatedMoney = money - parseInt(cup.innerText) * 15;
    takaBalance.innerText = updatedMoney;
    localStorage.setItem('Taka-Balance', updatedMoney);
    let cupBalance = parseInt(parseInt(document.getElementById('taka-balance').innerText) / 15);
    document.getElementById('cup-balance').innerText = cupBalance;
    localStorage.setItem('cup-balance', cupBalance);
    cupField.value = '';
    displayNote();
    localStorage.setItem('drink-cha', cup.innerText);
}
const displayNote = () => {
    let noshow = document.getElementById('alert')
    const taka = localStorage.getItem('Taka-Balance');
    if (parseInt(taka) > 15) {
        noshow.setAttribute('class', 'd-none');
    }
    else {
        noshow.removeAttribute('class', 'd-none');
    }
}
displayNote();
document.getElementById('cup-field').innerText = 0;



