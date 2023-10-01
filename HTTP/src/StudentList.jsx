// StudentList.js

import React, { useState, useEffect } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch('http://localhost:8080/springrest/searchAll')
      .then((response) => response.json())
      .then((data) => setStudents(data.students))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>Name:</strong> {student.name}<br />
            <strong>Email:</strong> {student.email}<br />
            <strong>Contact:</strong> {student.contact}<br />
            <strong>Address:</strong> {student.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
