import React, { useState } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

export default function PatientHistoryComponent() {
  return (
    <div className="row">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card rounded-15">
              <div className="card-body p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="img-fluid rounded-10"
                      style={{ width: "180px" }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Name : Danny McLoan</h5>
                    <p className="mb-2 pb-1 text-muted">Age : 32</p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-light">
                      <div>
                        <p className="small text-muted mb-1">Special points</p>
                        <p className="mb-0">This is the first item's accordion body. It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <MDBAccordion initialActive={1}>
          <MDBAccordionItem collapseId={1} headerTitle="Date : 04-04-2023  |  Doctor: Dr. Ranil Wikramasinghe">
            <div className="d-flex">
            <div className="card rounded-15 p-3 col-6">
                <p><b>Description :</b> hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the</p>
            </div>
            <div className="card rounded-15 p-3 col-6">
            <p><b>Medicines :</b> <br/>
                <ul>
                    <li>Medicine 1</li>
                    <li>Medicine 2</li>
                    <li>Medicine 3</li>
                </ul>
            </p>
            </div>
            </div>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="Date : 04-04-2023  |  Doctor: Dr. Ranil Wikramasinghe">
            <div className="d-flex">
            <div className="card rounded-15 p-3 col-6">
                <p><b>Description :</b> hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the</p>
            </div>
            <div className="card rounded-15 p-3 col-6">
            <p><b>Medicines :</b> <br/>
                <ul>
                    <li>Medicine 1</li>
                    <li>Medicine 2</li>
                    <li>Medicine 3</li>
                </ul>
            </p>
            </div>
            </div>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="Date : 04-04-2023  |  Doctor: Dr. Ranil Wikramasinghe">
            <div className="d-flex">
            <div className="card rounded-15 p-3 col-6">
                <p><b>Description :</b> hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the</p>
            </div>
            <div className="card rounded-15 p-3 col-6">
            <p><b>Medicines :</b> <br/>
                <ul>
                    <li>Medicine 1</li>
                    <li>Medicine 2</li>
                    <li>Medicine 3</li>
                </ul>
            </p>
            </div>
            </div>
          </MDBAccordionItem>
        </MDBAccordion>
      </div>
    </div>
  );
}
