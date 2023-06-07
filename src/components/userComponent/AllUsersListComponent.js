import React, { useEffect, useState } from "react";
import { getUsers, userActivation } from "../../services/UserService";
import ToggleButton from "react-bootstrap/ToggleButton";
import Form from "react-bootstrap/Form";
import UserViewModal from "../shared/modals/UserViewModal"

export default function AllUsersListComponent() {
  const [users, setUsers] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalData, setModalData] = useState([]);

  function handleToggleSwitch(index) {
    // Update the user's activeStatus based on the toggle switch state
    const updatedUsers = [...users];
    updatedUsers[index].activeStatus = updatedUsers[index].activeStatus === 2 ? 1 : 2;
    setUsers(updatedUsers);
    userActivation(updatedUsers[index].userId,updatedUsers[index].activeStatus)
  }

  const handleViewItem = (title, description) => {
    setModalTitle(title);
    setModalData(description);
    setModalShow(true);
  };

  useEffect(() => {
    getUsers().then((res) => {
        setUsers(res.data);
        console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="pb-3">Users</h1>
      <div className="d-flex ">
      </div>
      <div className="scrollbleTable">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">User Type</th>
              <th scope="col">Created/Requested Date</th>
              <th scope="col">Active Status</th>
              <th scope="col">View Registration</th>
              <th scope="col">Change Status</th>
            </tr>
          </thead>
          <tbody>
          {users.map(function (data, index) {
             let badge;
             if (data.activeStatus === 2) {
               badge = (
                 <span className="badge badge-pill" style={{ background: "red" }}>
                   Diactivated
                 </span>
               );
             } else if (data.activeStatus === 1) {
               badge = (
                 <span className="badge badge-pill" style={{ background: "green" }}>
                   Active
                 </span>
               );
             } else if (data.activeStatus === 3) {
               badge = (
                 <span className="badge badge-pill" style={{ background: "orange" }}>
                   Pending
                 </span>
               );
             }
            return(
            <tr key={index}>
              <th scope="row"> {index + 1}</th>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.userType}</td>
              <td>{data.createdOn}</td>
              <td>
              {badge}
              </td>
              <td>
                <button type="button" className="btn btn-primary tableButton"
                disabled={data.userType === "Admin"} 
                onClick={() => handleViewItem(data.firstName + " "+ data.lastName, data)}>
                  View
                </button>
              </td>
              <td>
              <Form.Check
              disabled={data.userType === "Admin"} 
                      type="switch"
                      id={`switch-${index}`}
                      checked={data.activeStatus === 1} // Assuming activeStatus 1 means activated
                      onChange={() => handleToggleSwitch(index)}
                    />   
            </td>
            </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <UserViewModal
        show={modalShow}
        title={modalTitle}
        data={modalData}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
