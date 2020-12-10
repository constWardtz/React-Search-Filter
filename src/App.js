import React, { useState } from "react";

/* MockData */
import MOCK_DATA from "./API/MOCK_DATA.json";

const App = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <>
      <h1>Filtering</h1>
      <input placeholder="Search..." onChange={handleOnChange} value={search} />
      {MOCK_DATA.filter((value) => {
        if (search.toLowerCase() === "") {
          return value;
        } else if (
          value.first_name.toLowerCase().includes(search.toLowerCase()) ||
          value.last_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return value;
        }
      }).map((names, key) => {
        return (
          <>
            <p key={key}>
              {names.first_name} {names.last_name}{" "}
            </p>
          </>
        );
      })}
    </>
  );
};

export default App;
