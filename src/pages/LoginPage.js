// src/pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [memberID, setMemberID] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (memberID === "ieee123") {
      localStorage.setItem("ieee_member", "true");
      navigate("/members");
    } else {
      alert("Invalid Member ID");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>IEEE Member Login</h2>
      <input
        type="text"
        placeholder="Enter Member ID"
        value={memberID}
        onChange={(e) => setMemberID(e.target.value)}
      />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
