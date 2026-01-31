import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Materials - elimikabure",
  description:
    "Download textbooks, past papers, notes, and educational resources aligned with Kenyan and international curricula.",
};

interface Material {
  id: number;
  title: string;
  subject: string;
  description: string;
  level: string;
  curriculum: string;
  type: string;
  fileSize: string;
  downloads: number;
  rating: number;
  uploadDate: string;
  downloadUrl: string;
  previewUrl?: string;
  tags: string[];
}

const materials: Material[] = [
  {
    id: 1,
    title: "KCSE Mathematics Past Papers (2015-2023)",
    subject: "Mathematics",
    description:
      "Complete collection of KCSE Mathematics past papers with marking schemes and solutions.",
    level: "Form 4",
    curriculum: "8-4-4 System",
    type: "Past Papers",
    fileSize: "15.2 MB",
    downloads: 2847,
    rating: 4.8,
    uploadDate: "2024-01-15",
    downloadUrl: "/downloads/kcse-math-past-papers.pdf",
    previewUrl: "/preview/kcse-math-preview.pdf",
    tags: ["KCSE", "Mathematics", "Past Papers", "Marking Schemes"],
  },
  {
    id: 2,
    title: "Form 3 Chemistry Comprehensive Notes",
    subject: "Chemistry",
    description:
      "Detailed chemistry notes covering all Form 3 topics including organic chemistry, acids and bases, and chemical reactions.",
    level: "Form 3",
    curriculum: "8-4-4 System",
    type: "Study Notes",
    fileSize: "8.7 MB",
    downloads: 1923,
    rating: 4.6,
    uploadDate: "2024-01-20",
    downloadUrl: "/downloads/form3-chemistry-notes.pdf",
    tags: ["Chemistry", "Form 3", "Study Notes", "Organic Chemistry"],
  },
  {
    id: 3,
    title: "Cambridge IGCSE Biology Textbook",
    subject: "Biology",
    description:
      "Complete Cambridge IGCSE Biology textbook with diagrams, exercises, and practical activities.",
    level: "IGCSE",
    curriculum: "Cambridge",
    type: "Textbook",
    fileSize: "45.3 MB",
    downloads: 3156,
    rating: 4.9,
    uploadDate: "2024-01-10",
    downloadUrl: "/downloads/cambridge-igcse-biology.pdf",
    previewUrl: "/preview/igcse-bio-preview.pdf",
    tags: ["IGCSE", "Biology", "Cambridge", "Textbook"],
  },
  {
    id: 4,
    title: "Primary School English Grammar Workbook",
    subject: "English",
    description:
      "Interactive English grammar workbook for primary school students with exercises and answer key.",
    level: "Primary (Std 4-8)",
    curriculum: "CBC",
    type: "Workbook",
    fileSize: "12.1 MB",
    downloads: 4521,
    rating: 4.5,
    uploadDate: "2024-01-25",
    downloadUrl: "/downloads/primary-english-grammar.pdf",
    tags: ["English", "Primary", "Grammar", "CBC", "Workbook"],
  },
  {
    id: 5,
    title: "Advanced Level Physics Revision Notes",
    subject: "Physics",
    description:
      "Comprehensive A-Level Physics revision notes covering mechanics, thermodynamics, and modern physics.",
    level: "A-Level",
    curriculum: "Cambridge",
    type: "Revision Notes",
    fileSize: "22.8 MB",
    downloads: 1647,
    rating: 4.7,
    uploadDate: "2024-01-18",
    downloadUrl: "/downloads/alevel-physics-revision.pdf",
    tags: ["A-Level", "Physics", "Revision", "Cambridge"],
  },
  {
    id: 6,
    title: "Kiswahili Fasihi za Kimataifa",
    subject: "Kiswahili",
    description:
      "Collection of Kiswahili literature texts and analysis for secondary school students.",
    level: "Form 1-4",
    curriculum: "8-4-4 System",
    type: "Literature",
    fileSize: "18.6 MB",
    downloads: 2234,
    rating: 4.4,
    uploadDate: "2024-01-12",
    downloadUrl: "/downloads/kiswahili-fasihi.pdf",
    tags: ["Kiswahili", "Literature", "Fasihi", "Secondary"],
  },
  {
    id: 7,
    title: "Grade 6 Mathematics CBC Textbook",
    subject: "Mathematics",
    description:
      "Official Grade 6 Mathematics textbook aligned with the Competency Based Curriculum (CBC).",
    level: "Grade 6",
    curriculum: "CBC",
    type: "Textbook",
    fileSize: "28.4 MB",
    downloads: 3789,
    rating: 4.8,
    uploadDate: "2024-01-08",
    downloadUrl: "/downloads/grade6-math-cbc.pdf",
    previewUrl: "/preview/grade6-math-preview.pdf",
    tags: ["Grade 6", "Mathematics", "CBC", "Textbook"],
  },
  {
    id: 8,
    title: "History of Africa Study Guide",
    subject: "History",
    description:
      "Comprehensive study guide covering African history from ancient civilizations to modern times.",
    level: "University",
    curriculum: "General",
    type: "Study Guide",
    fileSize: "35.7 MB",
    downloads: 1456,
    rating: 4.6,
    uploadDate: "2024-01-22",
    downloadUrl: "/downloads/african-history-guide.pdf",
    tags: ["History", "Africa", "University", "Study Guide"],
  },
];

const subjects = [
  "All",
  "Mathematics",
  "Chemistry",
  "Biology",
  "Physics",
  "English",
  "Kiswahili",
  "History",
];
const levels = [
  "All",
  "Primary",
  "Grade 6",
  "Form 1",
  "Form 2",
  "Form 3",
  "Form 4",
  "A-Level",
  "IGCSE",
  "University",
];
const curricula = ["All", "8-4-4 System", "CBC", "Cambridge", "General"];
const materialTypes = [
  "All",
  "Textbook",
  "Past Papers",
  "Study Notes",
  "Revision Notes",
  "Workbook",
  "Literature",
  "Study Guide",
];

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Hero Section */}
      <div className="bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Study Materials & Resources
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Access textbooks, past papers, notes, and educational resources
              aligned with Kenyan curricula (8-4-4, CBC) and international
              systems (Cambridge, IB). All materials are free to download.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white rounded-lg p-1 flex items-center max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search materials..."
                  className="flex-1 px-4 py-2 text-gray-900 bg-transparent focus:outline-none"
                />
                <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
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
          <h2 className="text-lg font-semibold mb-4">Filter Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                {subjects.map((subject) => (
                  <option key={subject} value={subject.toLowerCase()}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Level
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                {levels.map((level) => (
                  <option key={level} value={level.toLowerCase()}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Curriculum
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                {curricula.map((curriculum) => (
                  <option key={curriculum} value={curriculum.toLowerCase()}>
                    {curriculum}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                {materialTypes.map((type) => (
                  <option key={type} value={type.toLowerCase()}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border-2 border-blue-100 hover:border-blue-300 cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
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
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">KCSE Past Papers</h3>
              <p className="text-sm text-gray-600 mt-1">1,200+ papers</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border-2 border-green-100 hover:border-green-300 cursor-pointer">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-green-600"
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
              <h3 className="font-semibold text-gray-900">CBC Textbooks</h3>
              <p className="text-sm text-gray-600 mt-1">800+ resources</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border-2 border-purple-100 hover:border-purple-300 cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Study Notes</h3>
              <p className="text-sm text-gray-600 mt-1">2,500+ notes</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border-2 border-orange-100 hover:border-orange-300 cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">IGCSE Resources</h3>
              <p className="text-sm text-gray-600 mt-1">600+ materials</p>
            </div>
          </div>
        </div>

        {/* Materials List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {materials.map((material) => (
            <div
              key={material.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 flex-1">
                  {material.title}
                </h3>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    material.type === "Textbook"
                      ? "bg-blue-100 text-blue-800"
                      : material.type === "Past Papers"
                        ? "bg-red-100 text-red-800"
                        : material.type === "Study Notes"
                          ? "bg-green-100 text-green-800"
                          : material.type === "Revision Notes"
                            ? "bg-yellow-100 text-yellow-800"
                            : material.type === "Workbook"
                              ? "bg-purple-100 text-purple-800"
                              : material.type === "Literature"
                                ? "bg-pink-100 text-pink-800"
                                : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {material.type}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-purple-600 font-medium">
                  {material.subject} • {material.level}
                </p>
                <p className="text-gray-700 mt-2">{material.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-medium text-gray-500">Curriculum:</span>
                  <p className="text-gray-900">{material.curriculum}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">File Size:</span>
                  <p className="text-gray-900">{material.fileSize}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.floor(material.rating)
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
                  <span className="ml-1 text-gray-500">
                    ({material.rating})
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Downloads:</span>
                  <p className="text-gray-900">
                    {material.downloads.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {material.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {material.tags.length > 4 && (
                    <span className="text-gray-500 text-xs py-1">
                      +{material.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {material.previewUrl && (
                    <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      Preview
                    </button>
                  )}
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                    View Details
                  </button>
                </div>
                <a
                  href={material.downloadUrl}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Load More Materials
          </button>
        </div>

        {/* Contribute Section */}
        <div className="mt-16 bg-purple-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Help Build Our Library
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have study materials, textbooks, or resources that could help other
            students? Contribute to our growing library and help make education
            accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contribute"
              className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Upload Material
            </Link>
            <Link
              href="/request"
              className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Request Material
            </Link>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Usage Guidelines
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  All materials are provided for educational purposes only.
                  Please respect copyright laws and use materials responsibly.
                  If you are the copyright holder of any material and wish to
                  have it removed, please contact us.
                </p>
              </div>
            </div>
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
