import React, { useState } from "react";

const App = () => {
  const [cars, setCars] = useState(["Saab", "Volvo", "BMW"]);
  const [name, setName] = useState("");

  const insertCar = () => {
    setCars([...cars, name]);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        name="=txt"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input type="submit" name="=txt" onClick={insertCar} />
      <div>
        {cars.map((car, key) => (
          <div key={key}>
            <h1>{car}</h1>
            <button onClick={() =>console.log(key)}>hello</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
