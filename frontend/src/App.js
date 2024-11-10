import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Calificaciones from "./components/Calificaciones";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="App">
      {!user.length > 0 ? (
        <Login setUser={setUser} />
      ) : (
        <Calificaciones user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
