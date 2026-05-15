import  { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Button from "../components/Buttton";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const[showData,setShowData]=useState(false);

useEffect(() => {

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/job/all");
      setShowData(true);
      setJobs(response.data);
      console.log(response.data);

    } catch (error) {
      console.log("Error fetching jobs", error);
      setShowData(false);
    }
  };

  fetchJobs();

  const interval = setInterval(() => {
    fetchJobs();
    console.log("called...");
  }, 3000);

  return () => clearInterval(interval);

}, []);


 

  // Metrics
  const totalJobs = jobs.length;
  const runningJobs = jobs.filter(
    (job) => job.jobStatus === "RUNNING"
  ).length;

  const completedJobs = jobs.filter(
    (job) => job.jobStatus === "DONE"
  ).length;

  const failedJobs = jobs.filter(
    (job) => job.jobStatus === "FAILED"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100  flex flex-col">
   <div className="bg-black">
    <Navbar/> 
  </div>
      {/* Heading */}
      <div className="p-7 ">
      <div className=" flex justify-between mb-8">
       <div>
         <h1 className="text-4xl font-bold text-gray-800">
          Job Processing Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Monitor asynchronous background job execution and lifecycle states.
        </p>
       </div>
    {/* <span onClick={handleDashboardRefresh}> <Button /></span> */}
      </div> 

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500 text-sm">Total Jobs</h2>
          <p className="text-3xl font-bold mt-2">{totalJobs}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500 text-sm">Running</h2>
          <p className="text-3xl font-bold mt-2">{runningJobs}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500 text-sm">Completed</h2>
          <p className="text-3xl font-bold mt-2">{completedJobs}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500 text-sm">Failed</h2>
          <p className="text-3xl font-bold mt-2">{failedJobs}</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">
            All Jobs
          </h2>
        </div>
      { showData==true && 
        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 font-semibold text-gray-600">Job ID</th>
                <th className="p-4 font-semibold text-gray-600">Type</th>
                <th className="p-4 font-semibold text-gray-600">Status</th>
                <th className="p-4 font-semibold text-gray-600">Retry Count</th>
                <th className="p-4 font-semibold text-gray-600">Job Creation Time</th>
              </tr>
            </thead>

            <tbody >

              {  jobs.map((job) => (
                <tr
                  key={job.jobId}
                  className="border-y hover:bg-gray-50 transition"
                   >
                  <td className="p-4 font-medium text-gray-700">
                    #{job.jobId}
                  </td>

                  <td className="p-4 text-gray-700">
                    {job.jobType || "NA"}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                        
                        ${
                          job.jobStatus === "PENDING"
                            ? "bg-yellow-100 text-yellow-800 animate-pulse"
                            : ""
                        }

                        ${
                          job.jobStatus === "RUNNING"
                            ? "bg-blue-100 text-blue-800 animate-pulse"
                            : ""
                        }

                        ${
                          job.jobStatus === "DONE"
                            ? "bg-green-100 text-green-700"
                            : ""
                        }

                        ${
                          job.jobStatus === "FAILED"
                            ? "bg-red-100 text-red-700"
                            : ""
                        }
                      `}
                    >
                      {job.jobStatus}
                    </span>
                  </td>

                  <td className="p-4 text-gray-700">
                    {job.retryJobCount}
                  </td>
                  <td className="p-4 text-gray-700">
                    {job.jobCreationTime}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        }


      </div>
      </div>
    </div>
  );
};

export default Dashboard;