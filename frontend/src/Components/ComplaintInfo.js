import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Alert } from "@mui/material";

const ComplaintInfo = ({ showModal, setShowModal }) => {
  console.log(showModal, setShowModal);
  const [complaint, setComplaint] = useState(``);
  const [fName, setFname] = useState(``);
  const [email, setEmail] = useState(``);
  // const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const nameDisplay = async () => {
      const getData = await fetch("http://localhost:5000/complaintInfoDisplay");
      const myGetData = await getData.json();
      setFname(myGetData.fname);
      setEmail(myGetData.email);
    };
    nameDisplay();
  }, []);

  const postComplaint = async (e) => {
    e.preventDefault();

    if (complaint != ``) {
      const data = await fetch(`http://127.0.0.1:5000/complaintInfo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complaint, email }),
      });
      navigate("/helpline");
      return;
    } else {
      setShowModal(true);
    }

    // setError(true);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Alert severity="error">Write something</Alert>
        </Modal>
      )}
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        {" "}
        Welcome {fName}{" "}
      </h1>
      <br/>
      <h2>Lodge your complaint freely</h2>

      <form onSubmit={postComplaint}>
        <textarea
          className="ring-yellow-100 rounded border-2 border-rose-500 shadow hover:shadow-lg bg-slate-800 text-white"
          // type="text"
          placeholder="Write your Complaint"
          rows="10"
          cols="100"
          style={{ margin: "10px" }}
          onChange={(e) => {
            setComplaint(e.target.value);
          }}
        />
        <br />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          type="submit"
          style={{ marginBottom: "15px" }}
        >
          Lodge Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintInfo;
