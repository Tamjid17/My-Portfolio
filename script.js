const occupations = ['Student', 'UI Designer', 'Developer', 'Freelancer'];
const occupationElement = document.getElementById('ocp');
let currentIndex = 0;

function showOccupation() {
    occupationElement.textContent = occupations[currentIndex];
    occupationElement.style.opacity = 1;
    currentIndex = (currentIndex + 1) % occupations.length;
    setTimeout(hideOccupation, 2000); // Display each occupation for 2 seconds
  }

  function hideOccupation() {
    occupationElement.style.opacity = 0;
    setTimeout(showOccupation, 500); // Delay before fading in again
  }

  // Initial trigger
  showOccupation();