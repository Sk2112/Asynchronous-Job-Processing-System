import axios from "axios";
import { ScanHeart } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"


const Navbar = () => {

  const[messsage,setMessage]=useState(" ");

const handleCheckHealth= async ()=>{

  try{
    const response = await axios.get("http://localhost:8080/job/health");
    console.log(response.data);
    setMessage(response.data);
  }catch(error){
  console.log("Error",error);
  }
};


    const location = useLocation();
  return (
      <nav className="relative z-20 flex items-center justify-between px-10 py-6 ">
        
        {/* Left Links */}
        <div className="flex items-center gap-8 text-white  md:text-lg  font-medium ">

 <Link to="/" className={`${location.pathname==="/" ? "text-green-400":"text-white"}`}>
            Home
          </Link>

         <Link
  to="/addJob"
  className={`${
    location.pathname === "/addJob"
      ? "text-green-400"
      : "text-white"
  }`}
>
  Add Job
</Link>


          <Link to="/dashboard" className={`${location.pathname==="/dashboard" ? "text-green-400":"text-white"}`}>
            Dashboard
          </Link>

          <Link to="/track" className={`${location.pathname==="/track" ? "text-green-400":"text-white"}`}>
            Track Job 
          </Link>
         
        </div>

      
        {/* Right Side */}
        <div className="hidden  md:flex items-center gap-4 ">
          <Link to="/contactPage" className="text-white text-sm font-medium hover:text-gray-200 transition cursor-pointer">
            Contact Me
          </Link>

          <Link to="/architecture"   className="bg-green-500 hover:bg-green-600 transition text-white px-5 py-2 rounded-4xl text-sm font-semibold flex items-center gap-2 cursor-pointer">
            System Architecture 
            <span>→</span>
          </Link>
         <span> <ScanHeart onClick={handleCheckHealth} className="text-white hover:text-green-500 cursor-pointer"/> </span>
         <p className="text-white inline-block ">{messsage}</p>
        </div>

{/* Mobile Hamburger */}
<button className="md:hidden text-white text-2xl cursor-pointer">
  ☰
</button>
      </nav>
  )
}

export default Navbar