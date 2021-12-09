import listaPessoas from "../../cadastro/js/savePerson";
const email = document.querySelector(".js-email");
const password = document.querySelector(".js-password");
const form = document.querySelector(".js-login-form");

const verifica = () => {
  for (let i = 0; i < listaPessoas.length; i++) {
    if (
      listaPessoas[i].email === email.value &&
      listaPessoas[i].password === password.value
    ) {
      return true;
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (verifica()) {
    alert("Login efetuado com sucesso!");
    window.location.href = "../../../pages/lista-usuarios.html";
  } else {
    alert("Login ou senha incorretos!");
  }
});
