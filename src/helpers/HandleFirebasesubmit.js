import { useState,useEffect } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function HandleFirebasesubmit(props) {
  // State to store uploaded file
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/files/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          props.onUpload(url);
        });
      }
    );
  };

  return (
    <div>
      <input
        className="form-control-file"
        type="file"
        onChange={handleChange}
        accept="/image/*"
      />
      <div className="progress" style={{height: "20px"}}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percent}%`}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percent}%
        </div>
      </div>
    </div>
  );
}
export default HandleFirebasesubmit;
