import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";
import Layout from "../layouts/MainLayout";

export default function Home() {
  const { globalState, setGlobalState } = useContext(UserContext);

  // Reading values from the global state
  const theme = globalState.theme;


  console.log(globalState.currentUserType);

  return (
    <Layout>
        <div className="container-fluid px-4  text-center h-50">
          <div className="lc-block">
            <div editable="rich">
              <h2 className="display-2 fw-bold">
                Health <span className="text-primary">Management System</span>
              </h2>
            </div>
          </div>
          <div className="lc-block col-lg-6 mx-auto mb-1">
            <div editable="rich">
              <p className="lead">
              ood health and good sense are two of life’s greatest blessings.              </p>
            </div>
          </div>

          <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
            <img
              className="img-fluid"
              src="https://www.isglobal.org/documents/10179/8304240/Planetary+health+logo/cf137574-c80f-4e8c-abcb-c2f13718ed36?t=1662543417000"
              width=""
              height="100"
              sizes=""
              alt=""
            />
          </div>
        </div>
    </Layout>
  );
}
