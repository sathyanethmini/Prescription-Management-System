import React, { useContext } from "react";
import { MyContext } from "../contexts/AuthContext";
import Layout from "../layouts/MainLayout";

export default function Home() {
  const { globalState, setGlobalState } = useContext(MyContext);

  // Reading values from the global state
  const theme = globalState.theme;
  const user = globalState.user;
  const currentUserType = globalState.currentUserType;

  // Updating values in the global state
  const handleClick = () => {
    setGlobalState({
      ...globalState,
      theme: "dark",
    });
  };

  return (
    <Layout>
      <div>
        <h1>Home</h1>
      </div>
    </Layout>
  );
}
