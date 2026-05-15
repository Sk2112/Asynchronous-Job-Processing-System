import  { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const AddJob = () => {

  const [jobType, setJobType] = useState(null);


  const [createdJob, setCreatedJob] = useState(null);
  const [loading, setLoading] = useState(false);



  // Submit Handler
  const handleCreateJob = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:8080/job/create",
        {
          jobType: jobType,
        }
      );

      setCreatedJob(response.data);

      console.log("Response from post ",response.data);
        console.log("Job Queued Successfully");
        console.log("Job Type is ",jobType);
        toast.success("Job Queued Successfully")
      setJobType("");

    } catch (error) {
      console.log(error);
      toast.error("Failed to Create job");  
    }
    finally{
      setLoading(false);
    }
  };

  return (
   <div className="bg-black ">
    <Navbar/>
    
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6  ">

      <div className="flex flex-col min-w-lg   bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100  ">

        {/* Heading */}
        <div className="mb-5 text-center    ">
          <h1 className="text-4xl font-bold text-gray-800">
            Create Background Job
          </h1>

          <p className="text-gray-500 mt-3">
            Submit long-running tasks for asynchronous background processing.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleCreateJob} className="space-y-6">

          {/* Job Type */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Job Type
            </label>

            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="" disabled >Choose Job Type</option>

              <option value="INVOICE">INVOICE</option>

              <option value="EMAIL">EMAIL</option>

              <option value="PDF">PDF</option>

              <option value="REPORT">REPORT</option>

              <option value="DATA_IMPORT">DATA IMPORT</option>

            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
              className={`w-full py-5 rounded-xl font-semibold transition
  ${
    loading
      ? "flex justify-center"
      : "bg-black text-white hover:opacity-90"
  }`}
          >
            {loading ? <Loader/> : "Queue Job"}
          </button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default AddJob;