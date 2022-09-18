const showData = () => {
    const table = document.getElementById('table');
    let tr = document.createElement('tr');
    tr.innerHTML = `<td id='date'>${dateAndTime()}</td>
    <td id='cha'>${localStorage.getItem('drink-cha')}</td>
    <td id='balance'>${localStorage.getItem('cup-balance')}</td>`
    table.appendChild(tr);
    localStorage.setItem('date',document.getElementById('date').innerText);
}

function dateAndTime() {
    fetch('http://worldtimeapi.org/api/timezone/Asia/Dhaka')
        .then(res => res.json())
        .then(data => getDate(data))
}
const getDate = (value) => {
    const setDate = document.getElementById('date');
    setDate.innerText = value.datetime;
    // return value.datetime;
}
// document.getElementById('date').innerHTML = `${dateAndTime()}`;
// document.getElementById('date').innerText = localStorage.getItem('date');
// document.getElementById('cha').innerText = localStorage.getItem('drink-cha');
// document.getElementById('balance').innerText = localStorage.getItem('cup-balance');

// showData();