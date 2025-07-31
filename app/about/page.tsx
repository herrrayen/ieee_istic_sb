'use client';

import TeamCarousel from '@/components/team-carousel';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-blue-600 mb-4">
              About IEEE ISTIC SB
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>

            <div className="mt-10 text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                IEEE ISTIC SB is the engine of a vibrant community of
                innovators, learners, and future leaders. Through hands-on
                projects, global initiatives, and international representation,
                we help students bring ideas to life.
              </p>

              <p className="leading-relaxed mt-4">
                It's where tech meets purpose, and where leadership is built
                through growth, challenge, and community. This is where we
                create, lead, and belong. This is our home.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              <span>Join Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <span className="ml-6 text-gray-600 dark:text-gray-400 self-center">
              Join 400,000+ members worldwide
            </span>
          </div>

          {/* Our Goals and Objectives Section */}
          <div className="w-full max-w-7xl mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Our Goals and Objectives
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                What drives us and makes our Student Branch unique
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Card 1 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="text-4xl mb-4 text-blue-600">💡</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Curiosity & Lifelong Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  We're all about feeding your curiosity and helping you grow.
                  Through hands-on projects, workshops, and global
                  opportunities, we make sure you're always learning something
                  exciting and useful beyond the classroom.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="text-4xl mb-4 text-blue-600">🤝</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Collaboration Over Competition
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  We value teamwork and sharing knowledge. At our SB, you won't
                  just build projects—you'll build friendships, networks, and
                  real collaboration skills that matter in the real world.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="text-4xl mb-4 text-blue-600">🚀</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Innovation with Purpose
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  We don't just chase cool tech—we use it to solve real problems
                  and create meaningful impact. From local challenges to global
                  issues, we support students who want to make a difference
                  through innovation.
                </p>
              </div>
            </div>

            {/* ExCom and Counselor Section */}
            <div className="w-full max-w-7xl mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                  Meet Our Team
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
                <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                  Dedicated leaders working to create opportunities for our members
                </p>
              </div>
              
              {/* Carousel container */}
              <div className="relative overflow-hidden">
                {/* Carousel wrapper */}
                <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                  
                  {/* ExCom Card 1 */}
                  <div className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4 snap-start">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 mb-6 flex items-center justify-center overflow-hidden">
                        {/* Replace with actual image */}
                        <div className="text-white text-3xl font-bold">CH</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Chairperson</h3>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Hamza Mellouli</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Leading our IEEE Student Branch with vision and dedication to create impact through technology.
                      </p>
                    </div>
                  </div>
                  
                  {/* ExCom Card 2 */}
                  <div className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4 snap-start">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 mb-6 flex items-center justify-center overflow-hidden">
                        {/* Replace with actual image */}
                        <div className="text-white text-3xl font-bold">VC</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Vice Chair</h3>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Yosri Ziadi</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Supporting branch initiatives and helping to coordinate our technical activities.
                      </p>
                    </div>
                  </div>
                  
                  {/* ExCom Card 3 */}
                  <div className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4 snap-start">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 mb-6 flex items-center justify-center overflow-hidden">
                        {/* Replace with actual image */}
                        <div className="text-white text-3xl font-bold">SE</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Secretary</h3>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Maram El Kamel</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Managing communications and ensuring smooth operation of all branch activities.
                      </p>
                    </div>
                  </div>
                  
                  {/* ExCom Card 4 */}
                  <div className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4 snap-start">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 mb-6 flex items-center justify-center overflow-hidden">
                        {/* Replace with actual image */}
                        <div className="text-white text-3xl font-bold">TR</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Treasurer</h3>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Fatma Boughanmi</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Handling financial planning and ensuring resources are available for our activities.
                      </p>
                    </div>
                  </div>
                  
                  {/* ExCom Card 5 */}
                  <div className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4 snap-start">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 mb-6 flex items-center justify-center overflow-hidden">
                        {/* Replace with actual image */}
                        <div className="text-white text-3xl font-bold">WM</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Webmaster</h3>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Mohamed Rayen Trabelsi</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Managing our digital presence and ensuring our technological infrastructure.
                      </p>
                    </div>
                  </div>
                  
                  {/* Counselor Card */}
                  <div className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4 snap-start">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-400 to-purple-700 mb-6 flex items-center justify-center overflow-hidden">
                        {/* Replace with actual image */}
                        <div className="text-white text-3xl font-bold">CO</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Student Branch Counselor</h3>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Prof. Manef  Bourougaoui</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Providing guidance and mentorship to our student branch while connecting us to faculty resources.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Navigation arrows - optional */}
                <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Carousel dots/indicators */}
                <div className="flex justify-center mt-6">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mx-1"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 mx-1"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 mx-1"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 mx-1"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 mx-1"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 mx-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
