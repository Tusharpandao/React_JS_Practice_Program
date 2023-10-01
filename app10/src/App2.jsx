import React, { useEffect, useState } from 'react';

let App2=()=> {
  const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL of the API endpoint
    const apiUrl = 'http://localhost:8080/springrest/searchAll';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the retrieved data to the state
       // setLoading(false); // Set loading to false when data is received
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        //setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Data Retrieval Example</h1>
      
        <ul>
          {data.map((item) => (
            <li>{item.name}</li> // Assuming the data has an 'id' and 'name' field
          ))}
        </ul>
    
    </div>
  );
}

export default App2;
