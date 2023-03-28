import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";
import Layout from '../layouts/MainLayout'

export default function Prescriptions() {
  const { globalState, setGlobalState } = useContext(UserContext);
  const theme = globalState.theme;

  return (
    <Layout>
          <div>Prescriptions {theme}</div>
    </Layout>
  )
}
