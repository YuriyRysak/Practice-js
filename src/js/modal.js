// надоедалка setTimeout

import BSN from 'bootstrap.native';


const refs = {
    modal:document.querySelector('#exampleModal'),
    subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 5000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#exampleModal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
    if(promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
        console.log('Maximum number of discoveries or subscribed!');
        return;
    }
    setTimeout(() => {
        console.log('Открываем надоедалку');
        modal.show();
        promptCounter +=1;
    
    }, PROMPT_DELAY);

} 
function onSubscribeBtnClick() {
    hasSubscribed = true;
    modal.hide();

}


