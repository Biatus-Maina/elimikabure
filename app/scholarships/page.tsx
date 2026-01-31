import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scholarships - elimikabure",
  description:
    "Discover fully-funded and partial scholarships available for African students at all educational levels.",
};

interface Scholarship {
  id: number;
  title: string;
  provider: string;
  description: string;
  deadline: string;
  amount: string;
  level: string;
  location: string;
  eligibility: string[];
  applicationUrl: string;
  type: "Full" | "Partial" | "Merit-based" | "Need-based";
}

const scholarships: Scholarship[] = [
  {
    id: 1,
    title: "Mastercard Foundation Scholars Program",
    provider: "Mastercard Foundation",
    description:
      "Comprehensive scholarship program for academically talented young people from Africa who are committed to giving back to their communities.",
    deadline: "December 15, 2024",
    amount: "Full tuition + Living expenses",
    level: "Undergraduate & Graduate",
    location: "Various Universities Worldwide",
    eligibility: [
      "African citizen",
      "Demonstrated financial need",
      "Strong academic record",
      "Leadership potential",
    ],
    applicationUrl: "https://mastercardfdn.org/all/scholars/",
    type: "Full",
  },
  {
    id: 2,
    title: "DAAD Scholarships for Development-Related Postgraduate Courses",
    provider: "German Academic Exchange Service",
    description:
      "Scholarships for graduates from developing countries to pursue development-related master's degrees in Germany.",
    deadline: "March 31, 2024",
    amount: "€861/month + tuition coverage",
    level: "Graduate",
    location: "Germany",
    eligibility: [
      "Developing country citizen",
      "Bachelor's degree",
      "2+ years work experience",
      "German or English proficiency",
    ],
    applicationUrl: "https://www.daad.de/en/",
    type: "Full",
  },
  {
    id: 3,
    title: "Rhodes Scholarships",
    provider: "Rhodes Trust",
    description:
      "The world's oldest international scholarship programme, enabling outstanding young people from around the world to study at Oxford.",
    deadline: "October 1, 2024",
    amount: "Full tuition + Living stipend",
    level: "Graduate",
    location: "University of Oxford, UK",
    eligibility: [
      "Citizens of eligible countries",
      "Age 18-24",
      "Outstanding academic achievement",
      "Leadership qualities",
    ],
    applicationUrl: "https://www.rhodeshouse.ox.ac.uk/",
    type: "Full",
  },
  {
    id: 4,
    title: "African Leadership Academy Scholarship",
    provider: "African Leadership Academy",
    description:
      "Need-based financial aid for the two-year pre-university programme focused on developing ethical, entrepreneurial leaders.",
    deadline: "February 28, 2024",
    amount: "Up to 100% tuition coverage",
    level: "Pre-University",
    location: "South Africa",
    eligibility: [
      "African citizen aged 16-19",
      "Strong academic performance",
      "Leadership potential",
      "Financial need",
    ],
    applicationUrl: "https://www.africanleadershipacademy.org/",
    type: "Need-based",
  },
  {
    id: 5,
    title: "Chevening Scholarships",
    provider: "UK Government",
    description:
      "UK government's global scholarship programme, funded by the Foreign and Commonwealth Office and partner organisations.",
    deadline: "November 2, 2024",
    amount: "Full tuition + Living expenses + Flights",
    level: "Graduate",
    location: "United Kingdom",
    eligibility: [
      "Chevening-eligible country citizen",
      "Bachelor's degree",
      "2+ years work experience",
      "English language requirement",
    ],
    applicationUrl: "https://www.chevening.org/",
    type: "Full",
  },
  {
    id: 6,
    title: "MasterCard Foundation Scholarship at University of Cape Town",
    provider: "University of Cape Town",
    description:
      "Comprehensive scholarship for academically talented students from Africa, particularly those from disadvantaged backgrounds.",
    deadline: "August 31, 2024",
    amount: "Full tuition + Accommodation + Stipend",
    level: "Undergraduate & Graduate",
    location: "South Africa",
    eligibility: [
      "African citizen",
      "Financial need",
      "Academic excellence",
      "Leadership commitment",
    ],
    applicationUrl: "https://www.uct.ac.za/",
    type: "Full",
  },
];

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Scholarships for African Students
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover fully-funded and partial scholarships from reputable
              organizations and institutions worldwide. Your education journey
              starts here.
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Filter Scholarships</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Levels</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="pre-university">Pre-University</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Types</option>
              <option value="full">Full Scholarship</option>
              <option value="partial">Partial Scholarship</option>
              <option value="merit">Merit-based</option>
              <option value="need">Need-based</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Locations</option>
              <option value="africa">Africa</option>
              <option value="europe">Europe</option>
              <option value="north-america">North America</option>
              <option value="worldwide">Worldwide</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Search
            </button>
          </div>
        </div>

        {/* Scholarships List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 flex-1">
                  {scholarship.title}
                </h3>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    scholarship.type === "Full"
                      ? "bg-green-100 text-green-800"
                      : scholarship.type === "Partial"
                        ? "bg-yellow-100 text-yellow-800"
                        : scholarship.type === "Merit-based"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {scholarship.type}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 font-medium">
                  {scholarship.provider}
                </p>
                <p className="text-gray-700 mt-2">{scholarship.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-medium text-gray-500">Deadline:</span>
                  <p className="text-red-600 font-medium">
                    {scholarship.deadline}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Amount:</span>
                  <p className="text-green-600 font-medium">
                    {scholarship.amount}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Level:</span>
                  <p>{scholarship.level}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Location:</span>
                  <p>{scholarship.location}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-medium text-gray-500 text-sm">
                  Key Requirements:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {scholarship.eligibility.slice(0, 3).map((req, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {req}
                    </span>
                  ))}
                  {scholarship.eligibility.length > 3 && (
                    <span className="text-gray-500 text-xs">
                      +{scholarship.eligibility.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Details
                </button>
                <a
                  href={scholarship.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our scholarship database is constantly updated. Join our community
            to get notified about new opportunities or contribute by sharing
            scholarships you discover.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/community"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Join Community
            </Link>
            <Link
              href="/contribute"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Contribute Scholarship
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Image
                src="/web-app-manifest-192x192.png"
                alt="elimikabure logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <Link href="/" className="text-2xl font-bold text-blue-600">
                elimikabure
              </Link>
            </div>
            <p className="mt-2 text-gray-600">
              Free education for every African child
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/" className="text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/scholarships"
                className="text-gray-500 hover:text-gray-900"
              >
                Scholarships
              </Link>
              <Link
                href="/courses"
                className="text-gray-500 hover:text-gray-900"
              >
                Courses
              </Link>
              <Link
                href="/materials"
                className="text-gray-500 hover:text-gray-900"
              >
                Materials
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
