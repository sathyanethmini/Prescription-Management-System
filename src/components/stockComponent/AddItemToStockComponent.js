import React from "react";

export default function AddItemToStockComponent() {
  return (
    <div>
      <h1 className="">Add Medicine To Stock</h1>
      <form className="p-4 rounded-2 shadow-2-strong">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control mb-3"
            id="name"
            placeholder="Enter medicine name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Short Code</label>
          <input
            type="text"
            className="form-control mb-3"
            id="description"
            placeholder="Enter medicine description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Purpose</label>
          <input
            type="text"
            className="form-control mb-3"
            id="price"
            placeholder="Enter medicine price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="quentity">Description</label>
          <textarea
            type="text"
            className="form-control mb-3"
            id="quantity"
            placeholder="Enter medicine quentity"
          />
        </div>
        <div className="form-group">
          <label htmlFor="quentity">quentity</label>
          <input
            type="text"
            className="form-control mb-3"
            id="quantity"
            placeholder="Enter medicine quentity"
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
