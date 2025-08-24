const form = document.querySelector(".login-form");
form.addEventListener("submit", sendForm);
function sendForm(event) {
  event.preventDefault();
  const formEl = event.target;
  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    formEl.reset();
  }
}
