import React, { useState } from 'react';

function GreetingMessage() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good morning');
    //   console.log("good morning");
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good afternoon');
    //   console.log("good afternoon");
    } else {
      setGreeting('Good evening');
    //   console.log("good evening");
    }

    alert(`${greeting}, ${name}!`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default GreetingMessage;
