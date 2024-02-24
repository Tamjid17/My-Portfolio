const occupations = ['Student', 'UI Designer', 'Developer', 'Freelancer'];
const occupationElement = document.getElementById('ocp');
let currentIndex = 0;

function showOccupation() {
    occupationElement.textContent = occupations[currentIndex];
    occupationElement.style.opacity = 1;
    currentIndex = (currentIndex + 1) % occupations.length;
    setTimeout(hideOccupation, 2000);
  }

  function hideOccupation() {
    occupationElement.style.opacity = 0;
    setTimeout(showOccupation, 500); 
  }

  showOccupation();

  const form = document.getElementById('form');
  const result = document.getElementById('result');
  
  form.addEventListener('submit', function(e) {
      const formData = new FormData(form);
      e.preventDefault();
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      result.innerHTML = "Please wait..."
  
      fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                  result.innerHTML = json.message;
              } else {
                  console.log(response);
                  result.innerHTML = json.message;
              }
          })
          .catch(error => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
          })
          .then(function() {
              form.reset();
              setTimeout(() => {
                  result.style.display = "none";
              }, 3000);
          });
  });

  let grill = document.querySelector(".grill")
  grill.onclick = function() {
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
  }