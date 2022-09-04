import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cab from "../images/cab.jpg";
import auto from "../images/auto.jpg";
import busSchool from "../images/busSchool.png";
import Transportation from "./Transportation";

const TravelEdit = () => {
  const [transport, setTransport] = useState(``);
  const [destination, setDestination] = useState(``);
  const navigate = useNavigate();
  const editData = async (e) => {
    e.preventDefault();
    const data = await fetch("http://127.0.0.1:5000/travelEdit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transport, destination }),
    });
    const getData = await data.json();
    alert(
      `${getData.fname}, Your ${getData.travelArray.transport} has been booked for ${getData.travelArray.destination}`
    );
    navigate("/homePage");
  };
  const [clicked, setClicked] = useState(false);
  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",

          justifyContent: "space-evenly",
          margin: "25px 0px",
        }}
      >
        <Transportation
          image={cab}
          transporter={`Cab`}
          transport={transport}
          setTransport={setTransport}
          clicked={clicked}
          setClicked={setClicked}
        />
        <Transportation
          image={auto}
          transport={transport}
          transporter={`Auto`}
          setTransport={setTransport}
          clicked={clicked}
          setClicked={setClicked}
        />
        <Transportation
          image={busSchool}
          transporter={`Bus`}
          transport={transport}
          setTransport={setTransport}
          clicked={clicked}
          setClicked={setClicked}
        />
      </div>
      {transport != `` && (
        <div>
          <input
            style={{
              display: "block",
              border: "1px solid",
              margin: " auto",
            }}
            type="text"
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            placeholder="Enter your destination"
          />
          <button
            onClick={editData}
            style={{ marginTop: "30px" }}
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Submit
          </button>
        </div>
      )}
    </main>
  );
};

export default TravelEdit;
