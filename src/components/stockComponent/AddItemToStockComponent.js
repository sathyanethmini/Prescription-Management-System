import React from "react";

export default function AddItemToStockComponent() {
  return (
    <div>
      <h1 className="">Add Medicine To Stock</h1>
      <form className="p-4 rounded-2 shadow-2-strong">
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control mb-3"
            id="name"
            placeholder="Enter medicine name"
          />
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            className="form-control mb-3"
            id="description"
            placeholder="Enter medicine description"
          />
        </div>
        <div className="form-group">
          <label for="price">Price</label>
          <input
            type="text"
            className="form-control mb-3"
            id="price"
            placeholder="Enter medicine price"
          />
        </div>
        <div className="form-group">
          <label for="quentity">Quentity</label>
          <input
            type="text"
            className="form-control mb-3"
            id="quantity"
            placeholder="Enter medicine quentity"
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input mb-3" id="check" />
          <label className="form-check-label" for="check">
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
