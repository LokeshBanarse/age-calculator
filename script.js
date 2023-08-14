document.addEventListener("DOMContentLoaded", function() {
  const calButton = document.getElementById("cal");
  const resetButton = document.getElementById("reset");
  const inputDate = document.querySelector("input[type='date']");
  const para = document.getElementById("para");

  calButton.addEventListener("click", calculateAge);
  resetButton.addEventListener("click", resetForm);

  function calculateAge(event) {
    event.preventDefault();
    const selectedDate = new Date(inputDate.value);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - selectedDate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    para.textContent = `Calculated age is ≈ ${ageInYears.toFixed(2)} years`;
  }

  function resetForm() {
    inputDate.value = "";
    para.textContent = "Calculated age is =";
  }
});
