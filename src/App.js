import React, { useState, useEffect } from "react";
import List from "./List";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Aqui você pode buscar os dados dos usuários, por exemplo, de uma API.
    // Este é apenas um exemplo estático.
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Doe", email: "jane@example.com" },
      // outros usuários...
    ]);
  }, []);

  return (
    <div className="App">
      <List users={users} />
    </div>
  );
};

export default App;
