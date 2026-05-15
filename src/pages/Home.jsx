import bgImage from '../assets/HomeBg.png'
import Navbar from '../components/Navbar';



export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden flex flex-col justify-between p-1 ">
      
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background_Image"
        className="absolute inset-0 h-full w-full object-fill"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Navbar */}
    <Navbar/>

      {/* Hero Content */}
      <section className="relative z-10 flex  items-center justify-center text-center max-h-screen px-6 ">
        
        {/* Heading */}
        <h1 className="text-gray-300 text-2xl md:text-3xl lg:text-5xl font-bold leading-tight max-w-7xl backdrop-blur-2xl  rounded-xl p-2">
          Real-Time Background Job Execution & Monitoring
        </h1>
      </section>
    </div>
  );
}