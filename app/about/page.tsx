import { title } from "@/components/primitives";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl border-l-4 border-primary pl-8 py-6 mb-16">
            <h1 className="text-5xl font-light mb-8 tracking-tight">About <span className="font-bold text-primary">IEEE ISTIC SB</span></h1>
            
            <div className="text-xl space-y-6 text-gray-800 max-w-3xl">
              <p className="leading-relaxed">
                IEEE ISTIC SB is the engine of a vibrant community of innovators, learners, and future leaders.
                Through hands-on projects, global initiatives, and international representation, we help students bring ideas to life.
              </p>
              
              <p className="leading-relaxed">
                It's where tech meets purpose, and where leadership is built through growth, challenge, and community.
                This is where we create, lead, and belong. This is our home.
              </p>
              
              <div className="mt-12 flex items-center">
                <a 
                  href="https://www.ieee.org/membership/join/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-primary rounded text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 transition-all duration-300"
                >
                  <span>Join Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <span className="ml-6 text-sm text-gray-600">Join 400,000+ members worldwide</span>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-6xl mb-12">
            <h2 className="text-4xl font-bold mb-4 text-center">SUBUNITS</h2>
            <p className="text-xl text-center mb-8">
              Find all your tech interests here with our 6 diverse subunits!
            </p>
          </div>

          <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Row 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.01] group">
              <div className="mb-4 flex justify-center">
                <div className="h-24 flex items-center justify-center">
                  <Image 
                    src="/images/logos/cs-logo.jpg" 
                    alt="Computer Society Logo" 
                    width={170} 
                    height={140}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                Computer Society
              </h3>
              <p className="text-gray-700">
                Dive into the world of code where we build, orchestrate and innovate software! 
                Join our global community if you're interested in mastering subjects like Software 
                Engineering, AI, Cybersecurity, Competitive Programming and more!
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.01] group">
              <div className="mb-4 flex justify-center space-x-4">
                <div className="h-24 flex items-center justify-center">
                  <Image 
                    src="/images/logos/ias.png" 
                    alt="Industrial Applications Society Logo" 
                    width={110} 
                    height={96}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="h-24 flex items-center justify-center">
                  <Image 
                    src="/images/logos/pes.png" 
                    alt="Power and Energy Society Logo" 
                    width={110} 
                    height={96}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                Industrial Applications & Power and Energy Society
              </h3>
              <p className="text-gray-700">
                Welcome to the world of Industry, with a sustainable twist! 
                Explore real-world applications, visit factories, and connect 
                with global industry leaders shaping the future of energy and industry.
              </p>
            </div>

            {/* Row 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.01] group">
              <div className="mb-4 flex justify-center space-x-4">
                <div className="h-24 flex items-center justify-center">
                  <Image 
                    src="/images/logos/sscs.png" 
                    alt="Solid State Circuits Society Logo" 
                    width={130} 
                    height={96}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="h-24 flex items-center justify-center">
                  <Image 
                    src="/images/logos/cass.png" 
                    alt="Circuits And Systems Society Logo" 
                    width={96} 
                    height={96}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                Solid State Circuits & Circuits And Systems Society
              </h3>
              <p className="text-gray-700">
                We don't just use cutting-edge tech—we design it. Explore 
                the foundations of hardware innovation through Solid State 
                Circuits and System Design.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.01] group">
              <div className="mb-4 flex justify-center">
                <div className="h-24 flex items-center justify-center">
                  <Image 
                    src="/images/logos/ras-logo.png" 
                    alt="Robotics & Automation Society Logo" 
                    width={110} 
                    height={110}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                Robotics & Automation Society
              </h3>
              <p className="text-gray-700">
                Love robots? This is your playground. From ideation to deployment, 
                IEEE supports your projects with mentorship, funding, and a 
                global platform to showcase your work.
              </p>
            </div>

            {/* Row 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.01] group">
              <div className="mb-4 flex justify-center">
                <div className="h-24 flex items-center justify-center">
                  <Image 
                    src="/images/logos/sight-logo.jpeg" 
                    alt="Special Interest Group for Humanitarian Technologies Logo" 
                    width={135} 
                    height={110}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                Special Interest Group for Humanitarian Technologies
              </h3>
              <p className="text-gray-700">
                Engineering for impact. SIGHT reminds us that our skills have 
                a purpose—to give back, uplift communities, and create meaningful change.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.01] group">
              <div className="mb-4 flex justify-center">
                <div className="h-24 flex items-center justify-center">
                  <Image 
                    src="/images/logos/wie-logo.jpg" 
                    alt="Women In Engineering Logo" 
                    width={120} 
                    height={110}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                Women In Engineering
              </h3>
              <p className="text-gray-700">
                Empowering women in tech. Through global initiatives and a mission 
                of inclusion, WIE ensures all voices are heard and represented in the STEM world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
