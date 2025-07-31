'use client';

import TeamCarousel from '@/components/team-carousel';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center mb-12 w-full">
            <div className="w-full md:w-1/3 flex justify-center md:justify-end pr-0 md:pr-8 mb-8 md:mb-0">
              <img 
                src="/images/logos/logo istic.png" 
                alt="IEEE ISTIC Logo" 
                className="w-max md:w-full max-w-xs md:max-w-sm h-auto object-contain"
              />
            </div>
            
            {/* Vertical divider line - visible on md screens and up */}
            <div className="hidden md:block w-px h-64 bg-gradient-to-b from-blue-400 to-purple-400 mx-8"></div>
            
            <div className="w-full md:w-2/3 text-center md:text-left pl-0 md:pl-8">
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-blue-600 mb-4">
                About IEEE ISTIC SB
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto md:mx-0 rounded-full"></div>
              
              <div className="mt-10 text-xl text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  IEEE ISTIC SB is the engine of a vibrant community of innovators, learners, and future leaders.
                  Through hands-on projects, global initiatives, and international representation, we help students bring ideas to life.
                </p>
                
                <p className="leading-relaxed mt-4">
                  It's where tech meets purpose, and where leadership is built through growth, challenge, and community.
                  This is where we create, lead, and belong. This is our home.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              <span>Join Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>

            <span className="ml-6 text-gray-600 dark:text-gray-400 self-center">
              Join 400,000+ members worldwide
            </span>
          </div>
          
          <div className="w-full max-w-7xl mt-20">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                IEEE ISTIC SB GOALS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                What drives us and makes our Student Branch unique
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-16">
              {/* Card 1 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <div className="text-4xl p-4 rounded-full bg-blue-100/70 dark:bg-blue-900/30 text-blue-600">💡</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                  Curiosity & Lifelong Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-center">
                  We're all about feeding your curiosity and helping you grow.
                  Through hands-on projects, workshops, and global
                  opportunities, we make sure you're always learning something
                  exciting and useful beyond the classroom.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <div className="text-4xl p-4 rounded-full bg-blue-100/70 dark:bg-blue-900/30 text-blue-600">🤝</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                  Collaboration Over Competition
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-center">
                  We value teamwork and sharing knowledge. At our SB, you won't
                  just build projects—you'll build friendships, networks, and
                  real collaboration skills that matter in the real world.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <div className="text-4xl p-4 rounded-full bg-blue-100/70 dark:bg-blue-900/30 text-blue-600">🚀</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                  Innovation with Purpose
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-center">
                  We don't just chase cool tech—we use it to solve real problems
                  and create meaningful impact. From local challenges to global
                  issues, we support students who want to make a difference
                  through innovation.
                </p>
              </div>
            </div>

            {/* ExCom and Counselor Section */}
            <div className="w-full max-w-7xl mt-16 sm:mt-20 px-4 sm:px-0">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                  Meet Our Team
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
                <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                  Dedicated leaders working to create opportunities for our members
                </p>
              </div>
              
              {/* Interactive team carousel component */}
              <div className="overflow-hidden w-full">
                <TeamCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
