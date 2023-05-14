// get DOM elements
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const resultYears = document.getElementById('years');
const resultMonths = document.getElementById('months');
const resultDays = document.getElementById('days');
const errorMessages = document.querySelectorAll('.invisible');

// calculate age when button is clicked
document.getElementById('calculate-age-btn').addEventListener('click', (event) => {
  event.preventDefault(); // prevent form submission

  // get user input values
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // create date object from user input
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  // check if input values are valid
  if (
    isNaN(day) || isNaN(month) || isNaN(year) || 
    birthDate > today
  ) {
    errorMessages.forEach(msg => msg.classList.remove('invisible'));
    return;
  }

  // calculate age
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // adjust age if birth month is after current month
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
    if (ageDays < 0) {
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  }

  // display age results
  resultYears.innerText = `${ageYears} `;
  resultMonths.innerText = `${ageMonths}`;
  resultDays.innerText = `${ageDays} `;

  // hide error messages
  errorMessages.forEach(msg => msg.classList.add('invisible'));
});
