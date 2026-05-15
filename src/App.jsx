import { Route, Routes } from "react-router-dom"
import TrackJob from "./pages/TrackJob"
import AddJob from "./pages/AddJob"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import { Toaster } from "react-hot-toast"



const App = () => {

  return (
    <div>
      <Toaster position="top-center" />
      <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/dashboard" element={<Dashboard/>} />
  <Route path="/track" element={<TrackJob/>} />
  <Route path="/addJob" element={<AddJob/>} />

      </Routes>
    </div>
  )
}

export default App