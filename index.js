let themeButton = document.getElementById("theme-button");
let signNowButton = document.getElementById("sign-now-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  
}

const addSignature = () => {
  const nameInput = document.getElementById("name-input");
  const hometownInput = document.getElementById("hometown-input");

  // Get the values of the inputs
  const name = nameInput.value;
  const hometown = hometownInput.value;

  // Create a new paragraph element for the signature
  let signature = document.createElement("p");
  signature.textContent = "🖊️" + name + " from " + hometown + " just signed the petition!";

  // Append the signature to the signatures section
  let signatures = document.getElementById("signatures");
  signatures.appendChild(signature);
}

const validateForm = () => {
  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!containsErrors) {
    addSignature();
    document.getElementById("sign-petition").reset();
    return true;
  }
  else{
    document.getElementById("input").classList.add("error");
    return false;
  }
}

themeButton.addEventListener("click", toggleDarkMode);
signNowButton.addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
});
