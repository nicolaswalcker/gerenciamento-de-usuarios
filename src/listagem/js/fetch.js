import axios from "axios";
const container = document.querySelector(".js-container");
const url = `https://reqres.in/api/users?page=1`;
const fetch = (url) => {
  axios
    .get(url)
    .then((response) => {
      const data = response.data.data;
      data.forEach((user) => {
        const {
          email: userEmail,
          first_name: firstName,
          last_name: lastName,
          avatar: image,
        } = user;
        const userFullName = `${firstName} ${lastName}`;

        const personCard = `
        <div class="c-card">
        <a class="c-edit" href="#"
          ><img src="../assets/icon-edit.svg" alt="Editar card"
        /></a>
        <div class="c-card__content">
          <img
            class="c-card__img"
            src="${image}"
            alt="Imagem de ${userFullName}"
          />
          <h2 class="c-card__title">${userFullName}</h2>
          <p class="c-card__email">${userEmail}</p>
        </div>
      </div>
        `;
        container.innerHTML += personCard;
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
fetch(url);
