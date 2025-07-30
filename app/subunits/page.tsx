import { title } from "@/components/primitives";
import Image from "next/image";

export default function SubunitsPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">
              IEEE ISTIC SB Subunits
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            
            <div className="mt-10 text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                Our subunits represent specialized fields within IEEE, each focusing on a unique area of technology and engineering.
                Explore these communities to find your passion and connect with like-minded innovators.
              </p>
            </div>
          </div>

          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-1 gap-8 px-6">
            {/* Row 1 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-36 md:h-44 flex items-center justify-center">
                    <Image 
                      src="/images/logos/cs-logo.jpg" 
                      alt="Computer Society Logo" 
                      width={200} 
                      height={160}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    Computer Society
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    Dive into the world of code where we build, orchestrate and innovate software! 
                    Join our global community if you're interested in mastering subjects like Software 
                    Engineering, AI, Cybersecurity, Competitive Programming and more!
                  </p>
                </div>
              </div>
              
              {/* Accent border */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-400 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            </div>

            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-36 md:h-44 flex items-center justify-center gap-4">
                    <Image 
                      src="/images/logos/ias.png" 
                      alt="Industrial Applications Society Logo" 
                      width={120} 
                      height={100}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                    <Image 
                      src="/images/logos/pes.png" 
                      alt="Power and Energy Society Logo" 
                      width={120} 
                      height={100}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    Industrial Applications & Power and Energy Society
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    Welcome to the world of Industry, with a sustainable twist! 
                    Explore real-world applications, visit factories, and connect 
                    with global industry leaders shaping the future of energy and industry.
                  </p>
                </div>
              </div>
              
              {/* Accent border */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            </div>

            {/* Row 2 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-36 md:h-44 flex items-center justify-center gap-4">
                    <Image 
                      src="/images/logos/sscs.png" 
                      alt="Solid State Circuits Society Logo" 
                      width={130} 
                      height={96}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                    <Image 
                      src="/images/logos/cass.png" 
                      alt="Circuits And Systems Society Logo" 
                      width={96} 
                      height={96}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    Solid State Circuits & Circuits And Systems Society
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    We don't just use cutting-edge tech—we design it. Explore 
                    the foundations of hardware innovation through Solid State 
                    Circuits and System Design.
                  </p>
                </div>
              </div>
              
              {/* Accent border */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-green-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            </div>

            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-36 md:h-44 flex items-center justify-center">
                    <Image 
                      src="/images/logos/ras-logo.png" 
                      alt="Robotics & Automation Society Logo" 
                      width={150} 
                      height={150}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    Robotics & Automation Society
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    Love robots? This is your playground. From ideation to deployment, 
                    IEEE supports your projects with mentorship, funding, and a 
                    global platform to showcase your work.
                  </p>
                </div>
              </div>
              
              {/* Accent border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-red-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            </div>

            {/* Row 3 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-36 md:h-44 flex items-center justify-center">
                    <Image 
                      src="/images/logos/sight-logo.jpeg" 
                      alt="Special Interest Group for Humanitarian Technologies Logo" 
                      width={150} 
                      height={120}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    Special Interest Group for Humanitarian Technologies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    Engineering for impact. SIGHT reminds us that our skills have 
                    a purpose—to give back, uplift communities, and create meaningful change.
                  </p>
                </div>
              </div>
              
              {/* Accent border */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-200 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            </div>

            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-36 md:h-44 flex items-center justify-center">
                    <Image 
                      src="/images/logos/wie-logo.jpg" 
                      alt="Women In Engineering Logo" 
                      width={150} 
                      height={130}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    Women In Engineering
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    Empowering women in tech. Through global initiatives and a mission 
                    of inclusion, WIE ensures all voices are heard and represented in the STEM world.
                  </p>
                </div>
              </div>
              
              {/* Accent border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <a 
              href="https://www.ieee.org/communities/societies/index.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Explore All IEEE Societies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
