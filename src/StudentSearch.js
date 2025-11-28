import React, { useState } from "react";

const StudentSearch = () => {
  const [search, setSearch] = useState("");

  const students = [
    { name: "Rahul Sharma", roll: "101" },
    { name: "Neha Verma", roll: "102" },
    { name: "Arjun Reddy", roll: "103" },
    { name: "Priya Singh", roll: "104" },
    { name: "Deekshitha", roll: "105" }
  ];

  // Filter logic
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.roll.includes(search)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Search</h2>

      <input
        type="text"
        placeholder="Search by name or roll number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px"
        }}
      />

      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <li key={index}>
              {student.name} - {student.roll}
            </li>
          ))
        ) : (
          <p>No students found</p>
        )}
      </ul>
    </div>
  );
};

export default StudentSearch;

