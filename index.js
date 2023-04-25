var currentStep = 0;
var btnNext = document.getElementById('btnNext');
var btnPrev = document.getElementById('btnPrev');
var btnSubmit = document.getElementById('btnSubmit');
var steps = document.querySelectorAll('.step');


btnSubmit.style.display = 'none';
function showStep(n) {
    if (n >= steps.length || n < 0) {
        return;
    }
    steps[currentStep].style.display = "none";
    steps[n].style.display = "block";
    currentStep = n;

    if (currentStep === 0) {
        btnPrev.style.display = 'none';
    } else {
        btnPrev.style.display = "inline";
    }

    if (currentStep === steps.length -1) {
        btnNext.style.display = 'none';
        btnSubmit.style.display = 'inline';
    } else {
        btnNext.style.display = 'inline';
    }
}

function nextStep() {
    showStep(currentStep + 1);
}
function prevStep() {
    showStep(currentStep - 1);
}
showStep(currentStep)

btnNext.addEventListener('click', nextStep);
btnPrev.addEventListener('click', prevStep);