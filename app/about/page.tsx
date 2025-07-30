export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">
              About IEEE ISTIC SB
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            
            <div className="mt-10 text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
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
          
          <div className="mt-8 flex justify-center">
            <a 
              href="https://www.ieee.org/membership/join/index.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              <span>Join Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            
            <span className="ml-6 text-gray-600 dark:text-gray-400 self-center">Join 400,000+ members worldwide</span>
          </div>
          
          <div className="w-full max-w-7xl mt-20">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Interested in our specialized groups?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-xl mb-8">
                Explore our IEEE technical societies and discover your passion in specialized engineering fields.
              </p>
              <a 
                href="/subunits" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <span>Explore our subunits</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
