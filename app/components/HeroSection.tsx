"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <section className="py-8 mt-4 sm:mt-8 lg:mt-0">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-12">
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                🌍 Free Education for Africa
              </div>
              <h1 className="font-semibold leading-tight text-gray-900 text-4xl sm:text-5xl lg:text-6xl">
                Every African child deserves access to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-green-600">
                  quality education.
                </span>
              </h1>
            </div>
            <p className="flex text-gray-600 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none text-lg">
              Discover scholarships, free courses, study materials, and
              educational opportunities. We&apos;re breaking down barriers and
              creating opportunities for the next generation of African leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/scholarships"
                  className="px-8 items-center h-14 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white duration-300 ease-linear flex justify-center w-full sm:w-auto font-semibold"
                >
                  Explore Resources
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/about"
                  className="px-8 items-center h-14 rounded-3xl text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 duration-300 ease-linear flex justify-center w-full sm:w-auto font-medium"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-3 gap-8 w-full max-w-md mx-auto lg:max-w-none">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  10K+
                </div>
                <div className="text-sm text-gray-600">Study Materials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">
                  500+
                </div>
                <div className="text-sm text-gray-600">Scholarships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600">
                  1000+
                </div>
                <div className="text-sm text-gray-600">Free Courses</div>
              </div>
            </div>
          </div>

          <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
            {/* Main Image - Students studying */}
            <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 z-30 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Learn
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Access quality education resources
                  </p>
                </div>
                {/* Floating education icons */}
                <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-6 right-4 bg-white rounded-full p-2 shadow-md">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Secondary Image - African students */}
            <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 z-10 shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center relative">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Succeed
                  </h3>
                  <p className="text-gray-600 text-sm">Achieve your dreams</p>
                </div>
                {/* Additional floating icons */}
                <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md">
                  <svg
                    className="w-4 h-4 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-3 left-3 bg-white rounded-full p-1.5 shadow-md">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg z-40">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>

            <div className="absolute top-1/3 -left-4 bg-orange-500 text-white rounded-lg p-3 shadow-lg z-40">
              <div className="text-xs font-semibold">📚 Free</div>
            </div>

            <div className="absolute bottom-1/4 -right-4 bg-green-500 text-white rounded-lg p-3 shadow-lg z-40">
              <div className="text-xs font-semibold">🎓 Quality</div>
            </div>

            <div className="absolute top-2/3 -left-2 bg-purple-500 text-white rounded-full p-2 shadow-lg z-40">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
