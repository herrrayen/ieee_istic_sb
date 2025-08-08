"use client";
import { useState } from "react";

export default function ContactPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  // UPDATED: IAS-focused FAQs (replacing generic IEEE ones)
  const faqs = [
    {
      question: "What is the IEEE Industry Applications Society (IAS)?",
      answer:
        "IEEE IAS is a global society focused on advancing the theory and practice of electrical and electronic engineering in industrial and commercial environments—covering drives, energy systems, industrial automation, electrification, safety, and emerging sustainable technologies.",
    },
    {
      question: "What does the IAS ISTIC Chapter do?",
      answer:
        "We organize technical workshops, industrial visits, collaborative projects, bootcamps, and mentorship programs that bridge academic learning with real industrial applications in power, automation, and sustainable systems.",
    },
    {
      question: "How can I join the IAS ISTIC Chapter?",
      answer:
        "Become an IEEE Student Member at ieee.org/join, then add IAS as a society when registering or later from your IEEE account. After that, contact our committee or visit us on campus to get involved in activities.",
    },
    {
      question: "What benefits do IAS members receive?",
      answer:
        "Access to IEEE IAS magazines, technical resources, participation in competitions, eligibility for travel grants, networking with professionals, project opportunities, leadership roles, and early exposure to industry technologies.",
    }
  ];

  return (
    <div className="flex flex-col gap-8 pt-20">
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500 mb-4">
              Contact Us
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>

            <div className="mt-10 text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                Have questions about IEEE ISTIC Student Branch? We're here to
                help! Connect with us through any of the following channels.
              </p>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-12">
            {/* Phone Card */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Have a quick question? Call us:
                </p>
                <a
                  href="tel:+21695299726"
                  className="text-green-600 font-semibold mt-2 text-lg hover:underline"
                >
                  +216 95 299 726
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            </div>

            {/* Email Card */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Send us an email anytime:
                </p>
                <a
                  href="mailto:sb-istic@ieee.org"
                  className="text-green-600 font-semibold mt-2 text-lg hover:underline"
                >
                  sb-istic@ieee.org
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            </div>

            {/* Visit Card */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
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
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  ISTIC Borj Cedria,
                  <br />
                  Ben Arous, Tunisia
                </p>
                <a
                  href="https://maps.google.com/?q=ISTIC+Borj+Cedria+Tunisia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold mt-2 text-lg hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Google Maps (unchanged) */}
          <div className="w-full max-w-7xl px-6 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.248661153026!2d10.4144804!3d36.5817903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302ffbce980afd1%3A0xb82aa2125fe3d94d!2sInstitut%20Sup%C3%A9rieur%20des%20Technologies%20de%20l'Information%20et%20de%20la%20Communication%20de%20Borj%20C%C3%A9dria!5e0!3m2!1sen!2sus!4v1719757096626!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

            {/* FAQ Section */}
            <div className="w-full max-w-7xl px-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500 mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      className="flex justify-between items-center w-full p-5 text-left"
                      onClick={() => toggleQuestion(index)}
                    >
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                          openQuestion === index ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openQuestion === index
                          ? "max-h-96 py-5 px-5 border-t border-gray-200 dark:border-gray-700"
                          : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
