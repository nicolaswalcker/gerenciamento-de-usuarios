/* const form = document.querySelector('.js-login-form');
let listaPessoas = JSON.parse(sessionStorage.getItem('listaPessoas') || '[]');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  listaPessoas.push({email: emailValue, password: passwordValue});
  sessionStorage.setItem("listaPessoas", JSON.stringify(listaPessoas));
  window.location.href = "../../../pages/lista-usuarios.html";

});
export default listaPessoas; */