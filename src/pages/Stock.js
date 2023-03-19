import React, { useEffect, useState , useContext } from "react";
import { MyContext } from "./../contexts/AuthContext";
import ModalDialog from "../components/shared/modals/ModalDialog";
import { getProducts } from "../services/StockService";
import Layout from "../layouts/MainLayout";

export default function Stock() {
  const [modalShow, setModalShow] = React.useState(false);
  const [productData, setProductData] = useState([]);

  const { state } = useContext(MyContext);

  useEffect(() => {
    getProducts().then((res) => {
      setProductData(res.data);
    });
  }, []);

  return (
    <Layout>
    <div className="p-5">
      <h1 className="pb-3">Stock</h1>
      <div className="d-flex mb-4">
        <button type="button" className="btn btn-primary">
          Add New Medicine
        </button>
      </div>
      <div className="scrollbleTable">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Issue without prescription</th>
            <th scope="col">Quentity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productData.map(function (data, index) {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{data.code}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.price}</td>
                <td>
                  {data.autherize ? (
                    <button className="btn btn-success disabled">Yes</button>
                  ) : (
                    <button className="btn btn-danger disabled">No</button>
                  )}
                </td>
                <td>{data.quentity}</td>
                <td className="d-flex">
                  <button
                    type="button"
                    className="btn btn-primary tableButton"
                    onClick={() => setModalShow(true)}
                  >
                    View
                  </button>
                  <button type="button" className="btn btn-warning tableButton">
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      <ModalDialog show={modalShow} onHide={() => setModalShow(false)} />
    </div>
    </Layout>
  );
}
