"use client";
import React from "react";
import Image from "next/image";

export default function ActivitiesPage() {
  // Upcoming Events Data
  const upcomingEvents = [
    {
      title: "IAS TAM 5.0",
      date: "Soon",
      location: "Venue to be announced",
      image: "/images/events/iastam.jpg",
      description:
        "The IEEE IAS Technical Annual Meeting (TAM) is a prestigious conference bringing together industry professionals, academics, and researchers in the field of industrial applications of electrical and electronic engineering.",
      status: "Coming Soon",
    },
  ];

  // Past Events Data
  const pastEvents = [
    {
      title: "STUNAS INDUSTRIES Industrial Visit",
      date: "April 16, 2025",
      location: "STUNAS INDUSTRIES",
      image: "/images/events/stmias.jpg",
      description:
        "An empowering cybersecurity workshop focused on increasing women's participation in information security fields.",
    },
    {
      title: "IAS Benefits Session",
      date: "February 26, 2025",
      location: "Online",
      image: "/images/events/iasbenefits.jpg",
      description:
        "A hybrid event that aims to build AI skills through online sessions by Hamza Mellouli and onsite deep learning workshops by Mr.Ghassen El Abed.",
    },
    {
      title: "Raspberry Pi Computing with Python Session",
      date: "April 3, 2025",
      location: "Online",
      image: "/images/events/pi.jpg",
      description:
        "An exclusive industrial visit providing hands-on experience with cutting-edge semiconductor manufacturing technologies.",
    },
    {
      title: "Bootcamp TechRoad :Pathway to innovation",
      date: "April 3-5, 2025",
      location: "Online",
      image: "/images/events/techroad.jpg",
      description:
        "The TECHROAD Bootcamp is a joint initiative by IEEE SSCS-CAS ISTIC and IEEE IAS ISTIC, offering hands-on learning in Raspberry Pi & Physical Computing with Python, PCB Design, and a participant-selected third module.",
    },
  ];

  const [activeImage, setActiveImage] = React.useState<{
    src: string;
    alt: string;
    title?: string;
    desc?: string;
  } | null>(null);

  React.useEffect(() => {
    if (activeImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [activeImage]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex flex-col gap-8 pt-20">
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500 mb-4">
              Our Activities
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full"></div>

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
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500 mb-4">
                Upcoming Events
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
            </div>

            {/* Fully center (both axes) the single upcoming event card */}
            <div className="grid grid-cols-1 gap-8 px-6 place-items-center place-content-center min-h-[50vh]">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setActiveImage({
                      src: event.image,
                      alt: event.title,
                      title: event.title,
                      desc: event.description,
                    })
                  }
                  className="cursor-zoom-in w-full max-w-xl group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  {/* Event Image */}
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                      {event.status}
                    </div>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width:768px) 100vw, 600px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center">
                        {/* date */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 text-green-600"
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
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events Section */}
          <div className="w-full max-w-7xl pb-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-green-600 mb-4">
                Past Events
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setActiveImage({
                      src: event.image,
                      alt: event.title,
                      title: event.title,
                      desc: event.description,
                    })
                  }
                  className="cursor-zoom-in group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  {/* Event Image */}
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width:768px) 100vw, 600px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 text-green-600"
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

                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] flex items-center justify-center px-4 pt-24 pb-8"
        >
          <div
            onClick={() => setActiveImage(null)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-2xl md:max-w-3xl">
            <button
              onClick={() => setActiveImage(null)}
              aria-label="Close"
              className="absolute -top-10 right-0 text-gray-200 hover:text-white transition"
            >
              ✕
            </button>

            <div
              className="relative w-full rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black"
              style={{ maxHeight: "calc(100vh - 16rem)" }}
            >
              <div className="relative w-full h-[48vh] md:h-[50vh]">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority
                  sizes="(max-width:768px) 100vw, 800px"
                  className="object-contain"
                />
              </div>
            </div>

            {(activeImage.title || activeImage.desc) && (
              <div className="mt-4 text-center text-gray-200 px-2">
                {activeImage.title && (
                  <h3 className="text-base md:text-lg font-semibold">
                    {activeImage.title}
                  </h3>
                )}
                {activeImage.desc && (
                  <p className="mt-2 text-sm max-w-xl mx-auto text-gray-300">
                    {activeImage.desc}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
