const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    
    return alert("Please fill in all the fields!");
  }
  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}
