import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "./../../contexts/AuthContext";
import { getProducts } from "../../services/StockService";
import { deleteProduct } from "../../services/StockService";
import { useNavigate } from "react-router-dom";
import StockItemInformationModal from "../../components/shared/modals/StockItemInformationModal";

export default function StockListComponent() {
  const [modalShow, setModalShow] = React.useState(false);
  const [productData, setProductData] = useState([]);
  const [FilterdproductData, setFilteredProductData] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [medicineCode, setMedicineCode] = useState("");
  const [searchcode, setSearchCode] = useState("");

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

  const handleDeleteItem = (id) => {
    deleteProduct(id)
  }

  const handleUpdateItem = (id) => {
    Navigate(`/stock/update/${id}`)
  }

  const handleSearch = () => {
   if(searchcode != ""){
    setFilteredProductData( productData.filter(product => product.medicineShortCode == searchcode))
   }
   else{
    setFilteredProductData(productData)
   }
  }

  useEffect(() => {
    getProducts().then((res) => {
      setProductData(res.data);
      setFilteredProductData(res.data);
      console.log(res.data)
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
            <input type="search" id="form1" className="form-control"
            value={searchcode}
            onChange={(e) => setSearchCode(e.target.value)}
            />
            <label className="form-label" htmlFor="form1">
              Search by Code
            </label>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => handleSearch()}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="scrollbleTable ">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Purpose</th>
              <th scope="col">Quentity</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {FilterdproductData.map(function (data, index) {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.medicineShortCode}</td>
                  <td>{data.medicineName}</td>
                  <td>{data.purpose}</td>
                  <td>{data.qty}</td>
                  <td>{data.averagePricePerUnit}</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-primary tableButton"
                      onClick={() => handleViewItem(data.medicineName, data.medicineShortCode, data.description)}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning tableButton"
                      onClick={() => handleUpdateItem(data.medicineId)}
                    >
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteItem(data.medicineId)}>
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
