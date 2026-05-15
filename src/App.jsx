import { Route, Routes } from "react-router-dom"
import TrackJob from "./pages/TrackJob"
import AddJob from "./pages/AddJob"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import { Toaster } from "react-hot-toast"
import Architecture from "./pages/Architecture"
import ContactPage from "./pages/contactPage"



const App = () => {

  return (
    <div>
      <Toaster position="top-center" />
      <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/dashboard" element={<Dashboard/>} />
  <Route path="/track" element={<TrackJob/>} />
  <Route path="/addJob" element={<AddJob/>} />
  <Route path="/architecture" element={<Architecture/>} />
  <Route path="/contactPage" element={<ContactPage/>} />
      </Routes>
    </div>
  )
}

export default App