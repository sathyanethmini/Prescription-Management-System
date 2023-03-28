import React from "react";
import "./App.css";
import { MyProvider } from "./contexts/AuthContext";

import { setAuthToken } from "./helpers/setAuthToken";
import AppRoutes from "./routes/AppRoutes";

function App() {
  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <MyProvider>
        <div className="App">
          <AppRoutes/>
        </div>
    </MyProvider>
  );
}

export default App;
