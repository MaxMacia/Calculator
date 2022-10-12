import {screen} from './index.js';

export function equal(){
    var numberString = screen.innerHTML;
    var result = eval(numberString);
    screen.innerHTML = screen.innerHTML + '\r\n' + String(result);
}