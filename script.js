let inputBox = document.querySelector('input');

inputBox.addEventListener('keydown', (e)=>{
    if(e.getModifierState('CapsLock')) {
        e.preventDefault();
        alert('Caps Lock is ON!!!!');
    }

    if(e.key === 'Backspace') return;

    if(!e.getModifierState('Shift')) {
        e.preventDefault();
        alert('You Cannot type password');
    }
})