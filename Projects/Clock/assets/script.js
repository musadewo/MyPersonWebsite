const deg = 6;
const jm = document.querySelector('#jm');
const mn = document.querySelector('#mn');
const dtk = document.querySelector('#dtk');

setInterval(() => {
    let hari = new Date();
    let jam = hari.getHours() * 30;
    let menit = hari.getMinutes() * deg;
    let detik = hari.getSeconds() * deg;
    
    jm.style.transform = `rotateZ(${(jam)+(menit/12)}deg)`;
    mn.style.transform = `rotateZ(${menit}deg)`;
    mn.style.transform = `rotateZ(${detik}deg)`;
})
