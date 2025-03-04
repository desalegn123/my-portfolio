import React from 'react';
import imageurl from '../assets/Image/img.jpg';
import About from './About';
import Skills from './Skills';

const Homepage = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black transition-all duration-500">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 py-16">
        {/* Left Section: Text */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-400">Desalegn</span> Sisay
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            A PASSIONATE SOFTWARE ENGINEERING STUDENT AND FULLSTACK DEVELOPER.
          </p>

          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="path/to/your/resume.pdf"
              download
              className="px-6 py-2 bg-yellow-400 text-white text-lg font-semibold rounded-lg text-center hover:bg-amber-500 hover:animate-bounce transition-all rounded-tl-4xl rounded-br-4xl "
            >
              Download Resume
            </a>
            <a
              href="mailto:desalegn@example.com"
              className="px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 text-lg font-semibold rounded-tl-4xl rounded-br-4xl hover:bg-amber-400 hover:text-white transition-all hover:animate-bounce"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center md:justify-endv">
          <img
            src={imageurl} // Replace with your actual image URL
            alt="Desalegn Sisay"
            className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90 group-hover:shadow-xl"
          />
        </div>
      </div>
     
    </div>
    <section>
    <About/>

    </section>
    <section>
      <Skills/>
    </section>
    
    </>
   
  );
};

export default Homepage;
