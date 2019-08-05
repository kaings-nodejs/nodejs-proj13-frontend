// Add your code here
import openSocket from 'socket.io-client';  // you can also install package using npm 'socket.io-client'

const btnInit = document.getElementById('init');
const btnLine1 = document.getElementById('line1');
const btnLine2 = document.getElementById('line2');
const notify = document.getElementById('notify');


btnInit.addEventListener('click', () => {
const socket = openSocket('http://localhost:3002');    
    socket.on('line-connection', (obj) => {
        console.log('line..... ', obj);
        notify.style.backgroundColor = 'royalblue'
        notify.innerHTML = `calling ${obj.line}..... `;
        });
});

btnLine1.addEventListener('click', () => {
    console.log('call line1!');
    fetch('http://localhost:3002/line1');
});

btnLine2.addEventListener('click', () => {
    console.log('call line2!');
    fetch('http://localhost:3002/line2');
});