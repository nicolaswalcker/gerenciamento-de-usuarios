let listaPessoas = JSON.parse(sessionStorage.getItem("listaPessoas") || "[]");

export const savePerson = (emailValue, passwordValue) => {
  listaPessoas.push({ email: emailValue, password: passwordValue });
  sessionStorage.setItem("listaPessoas", JSON.stringify(listaPessoas));
};
export default listaPessoas;