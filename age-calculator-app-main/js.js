document.addEventListener('DOMContentLoaded', function() {
const dayInput = document.getElementById('DAY');
const monthInput = document.getElementById('MONTH');
const yearInput = document.getElementById('YEAR');
const inputInfo = document.querySelectorAll('.input')
const title = document.querySelectorAll('.text')
const button = document.getElementById('but');
const error = document.querySelectorAll('.main-block__field');
const errorMore = document.querySelectorAll('.main-block__more');
const top = document.querySelector('.main-block__top');

let outputYears = document.querySelector('.output-years__num');
const outputMonths = document.querySelector('.output-months__num');
const outputDays = document.querySelector('.output-days__num');

function calculateAge() {

  const birthDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
  const today = new Date();
  const ageInMilliseconds = today - birthDate;
  const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
  const monthInMilliseconds = (ageInYears - Math.floor(ageInYears)) * (12 * 24 * 60 * 60 * 1000);
  const ageInMonths = monthInMilliseconds / ( 24 * 60 * 60 * 1000);
  const sub = (ageInMonths - Math.floor(ageInMonths)) * ( 24 * 60 * 60 * 1000);
  const ageInDays = sub / (60 * 60 * 1000);

  if (!dayInput.value || !monthInput.value || !yearInput.value){
    for (let i = 0; i < error.length; i++ ) {
      error[i].classList.add('show');
    }
    for (let i = 0; i < inputInfo.length; i++){
      inputInfo[i].style.borderColor = 'hsl(0, 100%, 67%)';
    }
    for (let i = 0; i < title.length; i++) {
      title[i].style.color = 'hsl(0, 100%, 67%)';
    }
    top.style.paddingBottom = '40px';
    button.style.marginTop = '10px';
    outputYears.innerHTML = '--';
    outputMonths.innerHTML = '--';
    outputDays.innerHTML = '--';
  } else {
    for (let i = 0; i < error.length; i++ ) {
      error[i].classList.remove('show');
    }
    for (let i = 0; i < inputInfo.length; i++ ) {
      inputInfo[i].style.borderColor = 'hsl(0, 1%, 44%)';
    }
    for (let i = 0; i < title.length; i++) {
      title[i].style.color = 'hsl(0, 1%, 44%)';
    }
    top.style.paddingBottom = '30px';
    button.style.marginTop = '0';
    outputYears.innerHTML = Math.floor(ageInYears);
    outputMonths.innerHTML = Math.floor(ageInMonths);
    outputDays.innerHTML = Math.floor(ageInDays);
  }

  if (dayInput.value > 31){
    outputYears.innerHTML = '--';
    outputMonths.innerHTML = '--';
    outputDays.innerHTML = '--';
    errorMore[0].classList.add('showMore');
    error[0].classList.remove('show');
    title[0].style.color = 'hsl(0, 100%, 67%)';
    dayInput.style.borderColor = 'hsl(0, 100%, 67%)';
  } else {
    errorMore[0].classList.remove('showMore');
    dayInput.style.borderColor = 'hsl(0, 1%, 44%)';
  }
  if (monthInput.value > 12){
    outputYears.innerHTML = '--';
    outputMonths.innerHTML = '--';
    outputDays.innerHTML = '--';
    errorMore[1].classList.add('showMore');
    error[1].classList.remove('show');
    title[1].style.color = 'hsl(0, 100%, 67%)';
    monthInput.style.borderColor = 'hsl(0, 100%, 67%)';
  } else {
    errorMore[1].classList.remove('showMore');
    monthInput.style.borderColor = 'hsl(0, 1%, 44%)';
  }
  if (yearInput.value > today.getFullYear()){
    outputYears.innerHTML = '--';
    outputMonths.innerHTML = '--';
    outputDays.innerHTML = '--';
    errorMore[2].classList.add('showMore');
    error[2].classList.remove('show');
    title[2].style.color = 'hsl(0, 100%, 67%)';
    yearInput.style.borderColor = 'hsl(0, 100%, 67%)';
  } else {
    errorMore[2].classList.remove('showMore');
    yearInput.style.borderColor = 'hsl(0, 1%, 44%)';
  }
};

button.addEventListener('click', calculateAge);
})