import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "./../../contexts/AuthContext";
import { getProducts } from "../../services/StockService";
import { useNavigate } from "react-router-dom";
import StockItemInformationModal from "../../components/shared/modals/StockItemInformationModal";

export default function StockListComponent() {
  const [modalShow, setModalShow] = React.useState(false);
  const [productData, setProductData] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [medicineCode, setMedicineCode] = useState("");

  const Navigate = useNavigate();

  const handAddItem = () => {
    Navigate("/stock/add");
  };

  const handleViewItem = (title, code, description) => {
    setModalTitle(title);
    setMedicineCode(code);
    setModalDescription(description);
    setModalShow(true);
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProductData(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="pb-3">Stock</h1>
      <div className="d-flex ">
        <div>
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={handAddItem}
          >
            Add New Medicine
          </button>
        </div>

        <div className="input-group ml-5 ">
          <div
            id="search-autocomplete"
            className="form-outline shadow-2-strong"
          >
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" for="form1">
              Search by Code
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
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
                <tr key={index}>
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
                    <button
                      type="button"
                      className="btn btn-warning tableButton"
                    >
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
      <StockItemInformationModal
        show={modalShow}
        title={modalTitle}
        code={medicineCode}
        description={modalDescription}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
