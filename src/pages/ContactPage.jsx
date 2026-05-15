import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">

      <div className="max-w-5xl w-full">

        {/* Main Card */}
        <div className="backdrop-blur-2xl bg-white/10 border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl">

          {/* Small Tag */}
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
            Backend Engineer
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            SUMIT KUMAR
          </h1>

          {/* Divider */}
          <div className="w-28 h-1 bg-white/30 rounded-full mt-8"></div>

          {/* About */}
          <p className="mt-10 text-lg md:text-xl leading-9 text-gray-300 max-w-4xl">
            Backend-focused software engineer passionate about building
            scalable systems, asynchronous processing workflows, and
            real-world software architectures using Java and Spring Boot.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-4 mt-12">

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
              Java
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
              Spring Boot
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
              REST APIs
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
              Async Processing
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
              MySQL
            </span>

            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
              React
            </span>

          </div>

          {/* Bottom Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">
                What I Enjoy Building
              </h2>

              <p className="text-gray-400 leading-7">
                I enjoy building backend systems involving scheduler workers,
                retry mechanisms, REST APIs, and scalable application
                architectures inspired by real-world engineering workflows.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">
                Current Focus
              </h2>

              <p className="text-gray-400 leading-7">
                Currently exploring asynchronous systems, distributed-system
                concepts, Spring ecosystem tools, and backend scalability
                patterns through hands-on projects.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;