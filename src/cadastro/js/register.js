import { savePerson } from "./savePerson";
const registerForm = document.querySelector(".js-register");
const registerEmail = document.querySelector(".js-register-email");
const registerPassword = document.querySelector(".js-password");
const passwordConfirm = document.querySelector(".js-password-confirm");
export const registerNewPerson = () => {
  const emailValue = registerEmail.value;
  const passwordValue = registerPassword.value;
  const passwordConfirmValue = passwordConfirm.value;
  if (passwordValue === passwordConfirmValue) {
    savePerson(emailValue, passwordValue);
    console.log("cadastrado com sucesso");
    window.location.href = "./../../../index.html";
  } else {
    alert("Senhas não conferem");
  }
};

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  registerNewPerson();
});
