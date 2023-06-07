import React, { useState, useEffect } from "react"; 
import { updateProduct ,getProductById} from "../../services/StockService";
import { useParams } from "react-router-dom";

export default function UpdateStockItemComponent() {

    const {id} = useParams();

    const [medicineName, setMedicineName] = useState("");
    const [medicineShortCode, setMedicineShortCode] = useState("");
    const [medicinePurpose, setMedicinePurpose] = useState("");
    const [medicineDescription, setMedicineDescription] = useState("");
    const [medicineQuantity, setMedicineQuantity] = useState(0);
    const [medicinePrice, setMedicinePrice] = useState(0);
  
    useEffect(() => {
      getProductById(id).then((res) => {
              // Set the initial state with the provided product data
      setMedicineName(res.data.medicineName);
      setMedicineShortCode(res.data.medicineShortCode);
      setMedicinePurpose(res.data.purpose);
      setMedicineDescription(res.data.description);
      setMedicineQuantity(res.data.qty);
      setMedicinePrice(res.data.averagePricePerUnit);
      });
    },[]);

  const handleSubmit = (event)=>{
    event.preventDefault();
    var data = {
        medicineId:id,
      medicineName: medicineName,
      medicineShortCode: medicineShortCode,
      purpose: medicinePurpose,
      description: medicineDescription,
      qty: medicineQuantity,
      averagePricePerUnit: medicinePrice
    };

    updateProduct(data);
  }

  return (
    <div>
      <h1 className="">Edit Medicine Id : {id}</h1>
      <form className="p-4 rounded-2 shadow-2-strong" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control mb-3"
            id="name"
            placeholder="Enter medicine name"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Short Code</label>
          <input
            type="text"
            className="form-control mb-3"
            id="description"
            placeholder="Enter medicine description"
            value={medicineShortCode}
            onChange={(e) => setMedicineShortCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Purpose</label>
          <input
            type="text"
            className="form-control mb-3"
            id="price"
            placeholder="Enter medicine price"
            value={medicinePurpose}
            onChange={(e) => setMedicinePurpose(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quentity">Description</label>
          <textarea
            type="text"
            className="form-control mb-3"
            id="quantity"
            placeholder="Enter medicine quentity"
            value={medicineDescription}
            onChange={(e) => setMedicineDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quentity">quentity</label>
          <input
            type="number"
            className="form-control mb-3"
            id="quantity"
            placeholder="Enter medicine quentity"
            value={medicineQuantity}
            onChange={(e) => setMedicineQuantity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quentity">price</label>
          <input
            type="number"
            className="form-control mb-3"
            id="quantity"
            placeholder="Enter medicine quentity"
            value={medicinePrice}
            onChange={(e) =>setMedicinePrice( e.target.value)}
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input mb-3" id="check" />
          <label className="form-check-label" htmlFor="check">
            Allowed to issue without prescription
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
