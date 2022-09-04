import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={async (e) => {
        e.preventDefault();
        const data = await fetch("http://localhost:3001/signOut");
        const getData = await data.json();
        navigate("/");
      }}
    >
      Sign out
    </button>
  );
};

export default SignOut;
