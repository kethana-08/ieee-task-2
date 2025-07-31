import React, { useEffect, useState } from "react";
import { firebaseData } from "./firebase"; // ✅ Keep this

function MembersOnly() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchAllParticipants = async () => {
      // 🔹 Get from localStorage
      const localData = JSON.parse(localStorage.getItem("participants")) || [];

      // 🔹 Get from Firebase
      let firebaseParticipants = [];
      try {
        firebaseParticipants = await firebaseData(); // ✅ Use the function correctly
      } catch (error) {
        console.error("Error fetching from Firebase:", error);
      }

      // 🔹 Combine both (optional: remove duplicates)
      const allData = [...localData, ...firebaseParticipants];
      setParticipants(allData);
    };

    fetchAllParticipants();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>👥 Registered Participants</h2>
      {participants.length === 0 ? (
        <p>No participants registered yet.</p>
      ) : (
        <ul>
          {participants.map((p, i) => (
            <li key={i}>
              {p.name} - {p.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MembersOnly;
