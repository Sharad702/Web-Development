function rGen() {
    let rNum = (Math.floor(Math.random() * 10) + 1)
    alert(rNum + " is your number")
}


let button1 = document.getElementById('button1');
button1.addEventListener('click', rGen);