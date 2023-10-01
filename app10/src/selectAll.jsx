import React, { useEffect, useState } from 'react';

function SelectAll1() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL of the API endpoint
    const apiUrl = 'http://localhost:8080/springrest/searchAll';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setData(data); // Set the retrieved data to the state
        } else {
          console.error('Data is not an array:', data);
        }
        setLoading(false); // Set loading to false when data is received
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  },{});
  console.log(typeof data);
  console.log(data.stu);
  return (
    <div>
      <h1>Data Retrieval Example</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Array.isArray(data) ? (
            data.map((item) => (
                <li key={item.id}></li>
            //   <><li >{item.name}</li><li>{item.email}</li> </>
              // Assuming the data has an 'id' and 'name' field
            ))
          ) : (
            <p>Data is not an array</p>
          )}
        </ul>
        
      )}
    </div>
  );
}

export default SelectAll1;
