
import ArchitectureImage from "../assets/FullArchitecture.png";
import RetryMechanismImage from "../assets/retryMechanismImage.png";

export default function Architecture()
{
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
            System Design Documentation
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
            Asynchronous Job Processing System
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed">
            A backend-focused distributed-style processing system built using
            Spring Boot, Scheduler Workers, MySQL, and React to execute
            long-running tasks asynchronously with retry handling and real-time
            job tracking.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-10 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-5">Architecture Index</h2>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li>
                <a href="#overview" className="hover:text-black transition">
                  Project Overview
                </a>
              </li>

              <li>
                <a href="#problem" className="hover:text-black transition">
                  Problem Statement
                </a>
              </li>

              <li>
                <a href="#architecture" className="hover:text-black transition">
                  High-Level Architecture
                </a>
              </li>

              <li>
                <a href="#flow" className="hover:text-black transition">
                  System Flow
                </a>
              </li>

              <li>
                <a href="#components" className="hover:text-black transition">
                  Components
                </a>
              </li>

              <li>
                <a href="#lifecycle" className="hover:text-black transition">
                  Job Life-Cycle
                </a>
              </li>

              <li>
                <a href="#retry" className="hover:text-black transition">
                  Retry Mechanism
                </a>
              </li>

              <li>
                <a href="#future" className="hover:text-black transition">
                  Future Improvements
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <main className="lg:col-span-3 space-y-16">
          {/* Overview */}
          <section
            id="overview"
            className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10"
          >
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

            <p className="text-gray-600 leading-8 text-lg">
              The Asynchronous Job Processing System is designed to handle
              long-running tasks in the background instead of blocking API
              request threads. The system accepts jobs from users through REST
              APIs, stores them in a database, and processes them asynchronously
              using scheduler-based background workers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">
                  Core Concepts
                </h3>

                <ul className="space-y-3 text-gray-600">
                  <li>• Asynchronous Processing</li>
                  <li>• Scheduler Workers</li>
                  <li>• Retry Handling</li>
                  <li>• DTO Architecture</li>
                  <li>• REST APIs</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">
                  Technologies Used
                </h3>

                <ul className="space-y-3 text-gray-600">
                  <li>• Spring Boot</li>
                  <li>• Spring Scheduler</li>
                  <li>• MySQL</li>
                  <li>• React</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section
            id="problem"
            className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10"
          >
            <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>

            <p className="text-gray-600 leading-8 text-lg">
              In real-world backend systems, operations such as invoice
              generation, PDF creation, email sending, or AI processing can take
              significant time to complete. Processing these tasks directly
              inside API request threads increases response time and reduces
              scalability.
            </p>

            <div className="mt-8 bg-black text-white rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-5">
                Engineering Goal
              </h3>

              <p className="text-gray-300 leading-8">
                Decouple long-running tasks from request threads and execute
                them asynchronously using scheduler-based background workers.
              </p>
            </div>
          </section>

          {/* Architecture */}
          <section
            id="architecture"
            className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10"
          >
            <h2 className="text-3xl font-bold mb-8">
              High-Level Architecture
            </h2>

            {/* IMAGE PLACEHOLDER */}
            <div className="border-2 border-dashed border-gray-300 rounded-3xl  flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-500">
                  Architecture Diagram Placeholder
                </p>

                <p className="text-gray-400 mt-3">
                  <img src={ArchitectureImage} alt="FullArcitectureImage" />
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Frontend Layer</h3>

                <p className="text-gray-600 leading-7">
                  React dashboard responsible for creating jobs, monitoring
                  status, and visualizing background processing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">API Layer</h3>

                <p className="text-gray-600 leading-7">
                  Spring Boot REST APIs accept client requests and communicate
                  with the service layer.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Worker Layer</h3>

                <p className="text-gray-600 leading-7">
                  Scheduler workers continuously poll pending jobs and process
                  them asynchronously.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Database Layer</h3>

                <p className="text-gray-600 leading-7">
                  MySQL stores persistent job states, retry counts, and job
                  lifecycle information.
                </p>
              </div>
            </div>
          </section>

          {/* Flow */}
          <section
            id="flow"
            className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10"
          >
            <h2 className="text-3xl font-bold mb-8">System Flow</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">
                  1. Job Creation
                </h3>

                <p className="text-gray-600 leading-7">
                  Client sends a request to create a new background job using
                  REST APIs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">
                  2. Job Persistence
                </h3>

                <p className="text-gray-600 leading-7">
                  Backend stores the job in MySQL with initial status as
                  PENDING.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">
                  3. Background Processing
                </h3>

                <p className="text-gray-600 leading-7">
                  Scheduler workers fetch pending jobs and process them
                  asynchronously.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">
                  4. Status Tracking
                </h3>

                <p className="text-gray-600 leading-7">
                  Users can monitor job states such as PENDING, RUNNING, DONE,
                  or FAILED through dashboard APIs.
                </p>
              </div>
            </div>
          </section>

          {/* Components */}
          <section
            id="components"
            className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10"
          >
            <h2 className="text-3xl font-bold mb-8">
              Core System Components
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse overflow-hidden rounded-2xl">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-5">Component</th>
                    <th className="p-5">Responsibility</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b bg-gray-50">
                    <td className="p-5 font-semibold">Controller Layer</td>
                    <td className="p-5 text-gray-600">
                      Handles HTTP requests and responses.
                    </td>
                  </tr>

                  <tr className="border-b bg-white">
                    <td className="p-5 font-semibold">Service Layer</td>
                    <td className="p-5 text-gray-600">
                      Contains business logic and DTO conversions.
                    </td>
                  </tr>

                  <tr className="border-b bg-gray-50">
                    <td className="p-5 font-semibold">Repository Layer</td>
                    <td className="p-5 text-gray-600">
                      Handles database interaction using JPA.
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="p-5 font-semibold">Scheduler Worker</td>
                    <td className="p-5 text-gray-600">
                      Processes pending jobs asynchronously.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

            <section id="lifecycle">
              <div className="border-2 border-dashed border-gray-300 rounded-3xl  flex items-center justify-center bg-gray-50">
              <div className="text-left">
                <p className="text-3xl py-3 font-semibold text-black p-5">
                  Job Lifecycle State Diagram
                </p>

                <p className="text-gray-400 mt-3">
                  <img src={RetryMechanismImage} alt="FullArcitectureImage" />
                </p>
              </div>
            </div>
            </section>

          {/* Retry */}
          <section
            id="retry"
            className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10"
          >
            <h2 className="text-3xl font-bold mb-6">Retry Mechanism</h2>

            <p className="text-gray-600 leading-8 text-lg">
              Failed jobs are retried using scheduler-based retry cycles. Retry
              counts are persisted inside the database to ensure state survives
              scheduler reruns and application restarts.
            </p>

            <div className="mt-8 bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-5 text-lg">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                  <p>PENDING — Waiting for worker pickup</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                  <p>RUNNING — Background worker processing task</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-green-500"></div>
                  <p>DONE — Processing completed successfully</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-red-500"></div>
                  <p>FAILED — Retry scheduled for later execution</p>
                </div>
              </div>
            </div>
          </section>

          {/* Future Improvements */}
          <section
            id="future"
            className="bg-black text-white rounded-3xl p-10"
          >
            <h2 className="text-3xl font-bold mb-8">
              Future Improvements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">
                  Multi-threaded Workers
                </h3>

                <p className="text-gray-300 leading-7">
                  Improve throughput using ExecutorService and thread pools.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">
                  Queue Systems
                </h3>

                <p className="text-gray-300 leading-7">
                  Integrate Kafka or RabbitMQ for production-grade messaging.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">
                  Job Priorities
                </h3>

                <p className="text-gray-300 leading-7">
                  Add HIGH, MEDIUM, and LOW priority-based execution.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">
                  Monitoring Metrics
                </h3>

                <p className="text-gray-300 leading-7">
                  Track processing time, failures, throughput, and worker health.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
