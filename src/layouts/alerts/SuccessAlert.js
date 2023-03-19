import React from "react";

const SuccessAlert = (props) => {
  return (
    <>
      {props.isShow ? (
      <div class="alert alert-success" role="alert">
        Registration request has been sent to the admin. Please wait for the approval.
      </div>
    ) : null}
    </>
  );
};
 
export default SuccessAlert;