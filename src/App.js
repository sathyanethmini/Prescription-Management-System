import React from "react";
import "./App.css";
import { MyProvider } from "./contexts/AuthContext";

import Routers from "./routes/Routes";

import { setAuthToken } from "./helpers/setAuthToken";

function App() {
  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <MyProvider>
        <div className="App">
          <Routers />
        </div>
    </MyProvider>
  );
}

export default App;
