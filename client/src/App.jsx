import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Chats from "./pages/Chats";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container className="text-secondary">
        <Routes>
          <Route path="/" element={<Chats />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
