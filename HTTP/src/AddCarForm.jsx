import React, { useState } from 'react';

function AddCarForm() {
  // Define state variables to hold input data
  const [carName, setCarName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [price, setPrice] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a JSON object with the form data
    const carData = {
      carName,
      brandName,
      fuelType,
      price: parseFloat(price),
    };

    // Send a POST request to the Spring REST API
    try {
      const response = await fetch('http://localhost:8080/cardekho_case_study_restapp/addcar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
      });

      if (response.status === 200) {
        console.log('Car added successfully!');
        // You can perform additional actions here upon success.
      } else {
        console.error('Failed to add car. Status code:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Car Name:</label>
          <input type="text" value={carName} onChange={(e) => setCarName(e.target.value)} />
        </div>
        <div>
          <label>Brand Name:</label>
          <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
        </div>
        <div>
          <label>Fuel Type:</label>
          <input type="text" value={fuelType} onChange={(e) => setFuelType(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <button type="submit" >Add Car</button>
        </div>
      </form>
    </div>
  );
}

export default AddCarForm;
