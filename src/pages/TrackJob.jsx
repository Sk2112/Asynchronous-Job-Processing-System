import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const TrackJob = () => {

  const [jobId, setJobId] = useState("");

  const [jobData, setJobData] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");

  // Track Job
  const handleTrackJob = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.get(
        `http://localhost:8080/job/${jobId}`
      );

      setJobData(response.data);

      setErrorMessage("");

    } catch (error) {

      console.log(error);

      setJobData(null);

      setErrorMessage("Job not found");
    }
  };

  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col items-center gap-15">
  <div className="bg-black border-2 border-black w-full  h-full mx-1">
    <Navbar/> 
  </div>

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Track Job Status
          </h1>

          <p className="text-gray-500 mt-3">
            Enter your Job ID to check the latest processing status.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleTrackJob}
          className="space-y-6"
        >

          {/* Input */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Job ID
            </label>

            <input
              type="number"
              placeholder="Example : 1"
              value={jobId}
              onChange={(e) => setJobId(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Track Job
          </button>
        </form>

        {/* Error */}
        {errorMessage && (
          <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-xl">
            {errorMessage}
          </div>
        )}

        {/* Result Card */}
        {jobData && (

          <div className="mt-8 bg-gray-100 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Job Details
            </h2>

            <div className="space-y-4 text-gray-700">

              <p>
                <span className="font-semibold">Job ID:</span>{" "}
                #{jobData.jobId}
              </p>  

              <p>
                <span className="font-semibold">Job Type:</span>{" "}
                {jobData.jobType}
              </p>

              <p>
                <span className="font-semibold">Retry Count:</span>{" "}
                {jobData.retryJobCount}
              </p>

              {/* Status Badge */}
              <div>

                <span className="font-semibold mr-2">
                  Status:
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium  
                  
                  ${
                    jobData.jobStatus === "PENDING"
                      ? "bg-yellow-100 text-yellow-700 animate-pulse"
                      : ""
                  }

                  ${
                    jobData.jobStatus === "RUNNING"
                      ? "bg-blue-100 text-blue-700 animate-pulse"
                      : ""
                  }

                  ${
                    jobData.jobStatus === "DONE"
                      ? "bg-green-100 text-green-700"
                      : ""
                  }

                  ${
                    jobData.jobStatus === "FAILED"
                      ? "bg-red-100 text-red-700"
                      : ""
                  }
                `}
                >
                  {jobData.jobStatus}
                </span>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TrackJob;