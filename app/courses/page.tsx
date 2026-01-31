import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Courses - elimikabure",
  description:
    "Access thousands of free online courses from top universities and institutions worldwide, with certificates available.",
};

interface Course {
  id: number;
  title: string;
  provider: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  rating: number;
  students: number;
  certificate: boolean;
  courseUrl: string;
  imageUrl: string;
  skills: string[];
}

const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Computer Science and Programming Using Python",
    provider: "MIT (edX)",
    description:
      "Learn computational thinking and problem-solving using Python programming language. Perfect for beginners with no prior programming experience.",
    duration: "9 weeks",
    level: "Beginner",
    category: "Computer Science",
    rating: 4.8,
    students: 15000,
    certificate: true,
    courseUrl:
      "https://www.edx.org/course/introduction-to-computer-science-and-programming-7",
    imageUrl: "/courses/cs-python.jpg",
    skills: ["Python", "Programming", "Problem Solving", "Algorithms"],
  },
  {
    id: 2,
    title: "Financial Markets",
    provider: "Yale University (Coursera)",
    description:
      "An overview of the ideas, methods, and institutions that permit human society to manage risks and foster enterprise.",
    duration: "7 weeks",
    level: "Beginner",
    category: "Finance",
    rating: 4.6,
    students: 12500,
    certificate: true,
    courseUrl: "https://www.coursera.org/learn/financial-markets-global",
    imageUrl: "/courses/financial-markets.jpg",
    skills: ["Finance", "Economics", "Investment", "Risk Management"],
  },
  {
    id: 3,
    title: "Introduction to Public Health",
    provider: "University of Edinburgh (Coursera)",
    description:
      "Explore the fundamental concepts of public health and learn about the major health challenges facing the world today.",
    duration: "6 weeks",
    level: "Beginner",
    category: "Health",
    rating: 4.7,
    students: 8900,
    certificate: true,
    courseUrl: "https://www.coursera.org/learn/introduction-to-public-health",
    imageUrl: "/courses/public-health.jpg",
    skills: ["Public Health", "Epidemiology", "Health Policy", "Global Health"],
  },
  {
    id: 4,
    title: "Digital Marketing",
    provider: "Google (Coursera)",
    description:
      "Master the basics of digital marketing and e-commerce to gain the skills needed to land an entry-level job.",
    duration: "6 months",
    level: "Beginner",
    category: "Marketing",
    rating: 4.5,
    students: 25000,
    certificate: true,
    courseUrl:
      "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce",
    imageUrl: "/courses/digital-marketing.jpg",
    skills: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
  },
  {
    id: 5,
    title: "Introduction to Data Science in Python",
    provider: "University of Michigan (Coursera)",
    description:
      "Learn data manipulation, analysis, and visualization using Python libraries like pandas, numpy, and matplotlib.",
    duration: "4 weeks",
    level: "Intermediate",
    category: "Data Science",
    rating: 4.4,
    students: 18000,
    certificate: true,
    courseUrl: "https://www.coursera.org/learn/python-data-analysis",
    imageUrl: "/courses/data-science-python.jpg",
    skills: ["Python", "Data Analysis", "Pandas", "Data Visualization"],
  },
  {
    id: 6,
    title: "English for Career Development",
    provider: "University of Pennsylvania (Coursera)",
    description:
      "Improve your English skills for professional purposes including job searching, interviewing, and workplace communication.",
    duration: "5 weeks",
    level: "Intermediate",
    category: "Language",
    rating: 4.6,
    students: 22000,
    certificate: true,
    courseUrl: "https://www.coursera.org/learn/careerdevelopment",
    imageUrl: "/courses/english-career.jpg",
    skills: [
      "English",
      "Communication",
      "Professional Writing",
      "Interview Skills",
    ],
  },
  {
    id: 7,
    title: "African Cities: An Introduction to Urban Planning",
    provider: "École Polytechnique Fédérale de Lausanne (Coursera)",
    description:
      "Discover the challenges and opportunities of African cities and learn about sustainable urban planning solutions.",
    duration: "5 weeks",
    level: "Beginner",
    category: "Urban Planning",
    rating: 4.3,
    students: 5500,
    certificate: true,
    courseUrl: "https://www.coursera.org/learn/african-cities",
    imageUrl: "/courses/african-cities.jpg",
    skills: [
      "Urban Planning",
      "Sustainability",
      "African Studies",
      "Development",
    ],
  },
  {
    id: 8,
    title: "Introduction to Entrepreneurship",
    provider: "University of Cape Town (FutureLearn)",
    description:
      "Learn the fundamentals of entrepreneurship and how to develop a business idea from concept to launch.",
    duration: "4 weeks",
    level: "Beginner",
    category: "Business",
    rating: 4.5,
    students: 9800,
    certificate: true,
    courseUrl:
      "https://www.futurelearn.com/courses/introduction-to-entrepreneurship",
    imageUrl: "/courses/entrepreneurship.jpg",
    skills: [
      "Entrepreneurship",
      "Business Planning",
      "Innovation",
      "Leadership",
    ],
  },
];

const categories = [
  "All",
  "Computer Science",
  "Finance",
  "Health",
  "Marketing",
  "Data Science",
  "Language",
  "Urban Planning",
  "Business",
];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/web-app-manifest-192x192.png"
                alt="elimikabure logo"
                width={32}
                height={32}
                className="mr-3"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-blue-600 leading-tight">
                  elimikabure
                </h1>
                <span className="text-xs text-gray-500 leading-tight">
                  Free Education
                </span>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/scholarships"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Scholarships
              </Link>
              <Link
                href="/courses"
                className="text-base font-medium text-green-600"
              >
                Courses
              </Link>
              <Link
                href="/materials"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Materials
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Free Online Courses</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Access thousands of high-quality courses from top universities and
              institutions worldwide. Learn new skills, advance your career, and
              earn certificates - all for free.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white rounded-lg p-1 flex items-center max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="flex-1 px-4 py-2 text-gray-900 bg-transparent focus:outline-none"
                />
                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Filter Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Level
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                {levels.map((level) => (
                  <option key={level} value={level.toLowerCase()}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Features
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Certificate Available
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">1000+</div>
            <div className="text-sm text-gray-600">Free Courses</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">Universities</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">100K+</div>
            <div className="text-sm text-gray-600">Students Enrolled</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">95%</div>
            <div className="text-sm text-gray-600">Certificate Available</div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-medium">{course.provider}</div>
                  <div className="text-xs mt-1">{course.category}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1">
                    {course.title}
                  </h3>
                  {course.certificate && (
                    <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      Certificate
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-500">Duration:</span>
                    <p className="text-gray-900">{course.duration}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Level:</span>
                    <p className="text-gray-900">{course.level}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(course.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-gray-500">
                      ({course.rating})
                    </span>
                  </div>
                  <span className="ml-4 text-sm text-gray-500">
                    {course.students.toLocaleString()} students
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="text-gray-500 text-xs py-1">
                        +{course.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                    View Details
                  </button>
                  <a
                    href={course.courseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Enroll Free
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
            Load More Courses
          </button>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of African students who are advancing their careers
            and gaining new skills through our curated collection of free
            courses from world-renowned institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/community"
              className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Join Study Groups
            </Link>
            <Link
              href="/contribute"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Suggest a Course
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
