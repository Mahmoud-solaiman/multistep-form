//Model
const nextStepBtn = document.querySelector('.next-btn');
const fields = document.querySelectorAll('.form input');
const form = document.querySelector('.form');


//View
function emptyError(){
    fields.forEach(field => {
        if(field.value === ''){
            field.style.outlineColor = '#ed3548';
            form.reportValidity();
        } else {
            field.style.outlineColor = '';
        }
    });
}


//Controller
nextStepBtn.addEventListener('pointerup', emptyError);