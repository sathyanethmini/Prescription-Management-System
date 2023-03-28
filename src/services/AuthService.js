import { useContext } from "react";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken";
import { BaseUrl } from "../config/ConnectionStrings";
import { UserContext } from "../contexts/AuthContext";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const API_URL = BaseUrl + "api/Auth/";

export const useAuth = () => {
  const { globalState, setGlobalState } = useContext(UserContext);
  const navigate = useNavigate();

  const submitLoginData = async (data) => {
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

        setCurrentUser(response);
        navigate("/");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const setCurrentUser = (response) => {

    const token = response.data.token;
    localStorage.setItem("token", JSON.stringify(token));

    if (localStorage.token) {
      setAuthToken(localStorage.token);
      var decodedToken = jwt_decode(localStorage.token);
      console.log(decodedToken);

      setGlobalState({
        ...globalState,
        currentUserType: decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
      });
    }
  };

  const submitRegisterData = async (data, type) => {
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
        alert("Somthing went wrong. Please try again later.");
        console.log(response);
      });
  };

  const logout = async () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return {
    submitLoginData,
    submitRegisterData,
    logout,
  };
};
