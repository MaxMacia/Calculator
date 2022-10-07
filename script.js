let screen = document.getElementById('screen');

let clear = document.getElementById('clear');

let num0 = document.getElementById('0');
let num1 = document.getElementById('1');
let num2 = document.getElementById('2');
let num3 = document.getElementById('3');
let num4 = document.getElementById('4');
let num5 = document.getElementById('5');
let num6 = document.getElementById('6');
let num7 = document.getElementById('7');
let num8 = document.getElementById('8');
let num9 = document.getElementById('9');

let symplus = document.getElementById('+');
console.log(symplus)

function clearFunc(){
    screen.innerHTML = '';
}
function onClick(event){
    if(screen.innerHTML==''){
        screen.innerHTML = event.target.value;
    } else{
        screen.innerHTML = screen.innerHTML + event.target.value;
    }
    
    console.log(event.target.value);
}

clear.addEventListener('click', clearFunc)
num0.addEventListener('click', onClick);
num1.addEventListener('click', onClick);
num2.addEventListener('click', onClick);
num3.addEventListener('click', onClick);
num4.addEventListener('click', onClick);
num5.addEventListener('click', onClick);
num6.addEventListener('click', onClick);
num7.addEventListener('click', onClick);
num8.addEventListener('click', onClick);
num9.addEventListener('click', onClick);
symplus.addEventListener('click', onClick);
