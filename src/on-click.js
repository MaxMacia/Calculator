import {screen} from './index.js';

export function onClick(event){
    if(screen.innerHTML==''){
        screen.innerHTML = event.currentTarget.value;
    } else{
        screen.innerHTML = screen.innerHTML + event.currentTarget.value;
    }
}