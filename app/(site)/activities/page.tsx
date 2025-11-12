"use client";
import Image from "next/image";

export default function ActivitiesPage() {
  // Upcoming Events Data
  const upcomingEvents = [
    {
      title: "TSYP 13 (Tunisian Students & Young Professionals)",
      date: "December 22-24, 2025",
      location: "Medina Congress Center, Yasmine Hammamet",
      image: "/images/events/tsyp.png",
      description:
        "A national congress bringing together students and young professionals to discuss innovation, leadership and career opportunities.",
      status: "Coming Soon",
    },
  ];

  // Past Events Data
  const pastEvents = [
    {
      title: "IEEE Day",
      date: "October 7, 2025",
      location: "Soon",
      image: "/images/events/ieee-day.jpg",
      description:
        "Celebrating the first time IEEE members gathered to share their technical ideas in 1884 with special activities and networking.",
      status: "Coming Soon",
    },
    {
      title: "IEEEXtreme",
      date: "October 24-25, 2025",
      location: "Virtual - Global",
      image: "/images/events/extreme.jpg",
      description:
        "A 24-hour global programming competition bringing together students from around the world to solve real-world coding challenges.",
      status: "Coming Soon",
    },
    {
    title: "IEEE Lumen",
      date: "September 27, 2025",
      location: "Soon",
      image: "/images/events/lumen.jpg",
      description:
        "A premier lighting conference focusing on advancements in lighting technology, energy efficiency, and emerging applications.",
      status: "Coming Soon",
    },
    {
      title: "Symphony:AI Bootcamp",
      date: "April 13, 2025",
      location: "Online & CCSJ Ben Arous",
      image: "/images/events/symphony.jpg",
      description:
        "A hybrid event that aims to build AI skills through online sessions by Hamza Mellouli and onsite deep learning workshops by Mr.Ghassen El Abed.",
    },
    {
      title: "STMicroelectronics Industrial Visit",
      date: "April 11, 2025",
      location: "STMicroelectronics, Tunis",
      image: "/images/events/stm.jpg",
      description:
        "An exclusive industrial visit providing hands-on experience with cutting-edge semiconductor manufacturing technologies.",
    },
    {
      title: "Ideathon ISTIC AIZU 2.0",
      date: "April 19-20, 2025",
      location: "ISTIC Borj Cedria",
      image: "/images/events/aizu.jpg",
      description:
        "A collaborative event with the University of Aizu where students developed innovative solutions to real-world problems.",
    },
    
    {
      title: "SHE Secured",
      date: "June 23 to July 7, 2025",
      location: "Online",
      image: "/images/events/shesecured.png",
      description:
        "An empowering cybersecurity workshop focused on increasing women's participation in information security fields.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 pt-20">
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
              Our Activities
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r mx-auto rounded-full"></div>

            <div className="mt-10 text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                IEEE ISTIC SB hosts a variety of events and activities
                throughout the year. From technical workshops to networking
                opportunities, there's something for everyone.
              </p>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="w-full max-w-7xl mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                Upcoming Events
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  {/* Event Image */}
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                      {event.status}
                    </div>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {event.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {event.title}
                      </h3>
                    </div>

                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">
                        {event.location}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Accent border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events Section */}
          <div className="w-full max-w-7xl pb-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-blue-600 mb-4">
                Past Events
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  {/* Event Image */}
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 text-purple-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {event.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {event.title}
                      </h3>
                    </div>

                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">
                        {event.location}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Accent border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}