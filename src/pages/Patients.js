import React from "react";
import PatientsListComponent from "../components/patientComponent/patientsListComponent";
import Layout from "../layouts/MainLayout";

export default function Patients() {
  return (
    <Layout>
      <PatientsListComponent/>
    </Layout>
  );
}
