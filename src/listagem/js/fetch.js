import axios from "axios";
const fetch = () => {
  const url = `https://reqres.in/api/users?page=2`;
  axios
    .get(url)
    .then((response) => {

    })
    .catch((error) => {
      console.log(error);
    });
};
fetch()