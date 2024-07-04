import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import FlightD from "./pages/Flight"
import HotelD from "./pages/Hotel"
import Trip from "./pages/Trip"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/flight"
          element={
            <ProtectedRoute>
              <Navbar />
              <FlightD />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hotel"
          element={
            <ProtectedRoute>
              <Navbar />
              <HotelD />
            </ProtectedRoute>
          }
        />

        <Route
          path="/trip"
          element={
            <ProtectedRoute>
              <Navbar />
              <Trip />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Navbar />
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
