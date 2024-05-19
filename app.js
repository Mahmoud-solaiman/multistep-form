//Model
const nextStepBtn = document.querySelector('.next-btn');
const fields = document.querySelectorAll('.form input');
const form = document.querySelector('.form');
const stepOne = document.querySelector('.step-one');
const stepTwo = document.querySelector('.step-two');
const stepThree = document.querySelector('.step-three');
const backBtn = document.querySelector('.go-back-btn');
const stepsOrder = document.querySelectorAll('.step-order');
const monthly = document.getElementById('monthly');
const yearly = document.getElementById('yearly');
const planCost = document.querySelectorAll('.cost');
const monthlyLabel = document.querySelector('.monthly-label');
const yearlyLabel = document.querySelector('.yearly-label');
const cards = document.querySelectorAll('.card');

//View
function stepsChecker(){
    //Step one checks
    if(getComputedStyle(stepOne).display === 'block') {
        if(fields[0].value === '' || fields[1].value === '' || fields[2].value === '') {
            fields.forEach(field => {
                if(field.value === '') {
                    field.style.outlineColor = '#ed3548';
                    form.reportValidity();
                } else {
                    field.style.outlineColor = '';
                }
            });
        } else {
            stepOne.style.display = 'none';
            stepTwo.style.display = 'block';
            backBtn.style.visibility = 'visible';
            stepsOrder.forEach(stepOrder => {
                stepOrder.classList = 'step-order';
            });
            stepsOrder[1].classList = 'step-order active-step';
        }
    } else if(getComputedStyle(stepTwo).display === 'block') {
        stepTwo.style.display = 'none';
        stepThree.style.display = 'block';
        stepsOrder.forEach(stepOrder => {
            stepOrder.classList = 'step-order';
        });
        stepsOrder[2].classList = 'step-order active-step';
    }
}

function monthlyPlan(){
    planCost[0].textContent = '$9/mo';
    planCost[1].textContent = '$12/mo';
    planCost[2].textContent = '$15/mo';
    cards.forEach(card => {
        if(card.lastElementChild.classList == 'discount'){
            const discount = document.querySelector('.discount');
            discount.remove();
        }
    });
}

function yearlyPlan(){
    planCost[0].textContent = '$90/yr';
    planCost[1].textContent = '$120/yr';
    planCost[2].textContent = '$150/yr';
    cards.forEach(card => {
        const discount = document.createElement('h5');
        discount.textContent = '2 months free';
        discount.classList = 'discount';
        card.appendChild(discount);
    });
}


//Controller
nextStepBtn.addEventListener('pointerup', stepsChecker);
monthlyLabel.addEventListener('pointerup', monthlyPlan);
yearlyLabel.addEventListener('pointerup', yearlyPlan);
cards.forEach(card => {
    card.addEventListener('pointerup', ()=>{
        cards[0].classList = 'card';
        cards[1].classList = 'card';
        cards[2].classList = 'card';
        card.classList = 'card selected-card';
    });
});