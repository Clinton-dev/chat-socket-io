import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Chats from "./pages/Chats";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <Container className="text-secondary">
        <Routes>
          <Route path="/" element={user ? <Chats /> : <Login />} />
          <Route path="/login" element={user ? <Chats /> : <Login />} />
          <Route path="/register" element={user ? <Chats /> : <Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
