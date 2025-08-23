const form = document.querySelector(".login-form");
form.addEventListener("submit", sendForm);
function sendForm(event) {
  event.preventDefault();
  const formEl = event.target;
  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;
  if (email === "" || password === "") {
    console.log("All form fields must be filled in");
  }
  console.log(`Email: ${email}, Password:${password}`);
  formEl.reset();
}
console.log(form);
