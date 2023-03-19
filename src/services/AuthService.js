import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken";

const API_URL = "https://localhost:44382/api/Auth/";

export const submitLoginData = async (data) => {
  await axios({
    method: "post",
    withCredentials: true,
    url: API_URL + "Login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then(function (response) {
      const token = response.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      setAuthToken(token);

      //redirect user to home page
      window.location.href = "/";
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};

export const submitRegisterData = async (data, type) => {
  var endPoint = "";
  if (type === "ADM") {
    endPoint = "RegisterAdmin";
  } else if (type === "FAMC") {
    endPoint = "RegisterPharmacist";
  } else if (type === "DOC") {
    endPoint = "RegisterDoctor";
  } else {
    endPoint = "RegisterPatient";
  }

  await axios({
    method: "post",
    withCredentials: true,
    url: API_URL + endPoint,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then(function (response) {
      if (response.status === 200) {
        alert(
          "Registration request has been sent to the admin. Please wait for the approval."
        );
      }
    })
    .catch(function (response) {
      alert(
        "Somthing went wrong. Please try again later."
      );
      console.log(response);
    });
};

export const logout = async () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
