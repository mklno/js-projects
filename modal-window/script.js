'use strict'

const btn = document.querySelectorAll('.btn');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
const card = document.querySelector('.card');
const opencard = function(){
    card.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closecard = function(){
    card.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0; i < btn.length; i++){
    btn[i].addEventListener('click', opencard);
}
close.addEventListener('click', closecard);
overlay.addEventListener('click', closecard);
document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !card.classList.contains('hidden')){
        closecard();
    }
})