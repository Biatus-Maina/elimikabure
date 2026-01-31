import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Scholarships", href: "/scholarships" },
    { name: "Free Courses", href: "/courses" },
    { name: "Study Materials", href: "/materials" },
    { name: "Career Guidance", href: "/careers" },
  ];

  const community = [
    { name: "Join Community", href: "/community" },
    { name: "Contribute", href: "/contribute" },
    { name: "Contact Us", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Mission */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/web-app-manifest-192x192.png"
                alt="elimikabure logo"
                width={32}
                height={32}
                className="mr-3"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-blue-600 leading-tight">
                  elimikabure
                </h3>
              </div>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Free education for every African child. Breaking barriers,
              creating opportunities, and empowering the next generation through
              accessible education. Together, we&apos;re building a brighter
              future for Africa.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.017 0C8.396 0 8.025.015 6.624.072 5.225.13 4.297.333 3.488.63c-.814.32-1.505.745-2.193 1.433S.65 3.568.33 4.382C.033 5.19-.17 6.118-.228 7.517c-.057 1.4-.072 1.771-.072 5.392s.015 3.992.072 5.392c.058 1.399.261 2.327.558 3.135.32.814.745 1.505 1.433 2.193.688.688 1.379 1.113 2.193 1.433.808.297 1.736.5 3.135.558 1.4.057 1.771.072 5.392.072s3.992-.015 5.392-.072c1.399-.058 2.327-.261 3.135-.558.814-.32 1.505-.745 2.193-1.433.688-.688 1.113-1.379 1.433-2.193.297-.808.5-1.736.558-3.135.057-1.4.072-1.771.072-5.392s-.015-3.992-.072-5.392c-.058-1.399-.261-2.327-.558-3.135-.32-.814-.745-1.505-1.433-2.193C20.52.65 19.829.225 19.015-.095 18.207-.392 17.279-.595 15.88-.653 14.48-.71 14.109-.725 10.488-.725S6.496-.71 5.096-.653C3.697-.595 2.769-.392 1.961-.095 1.147.225.456.65-.232 1.338-.92 2.026-1.345 2.717-1.665 3.531c-.297.808-.5 1.736-.558 3.135C-.67 8.066-.685 8.437-.685 12.058s.015 3.992.072 5.392c.058 1.399.261 2.327.558 3.135.32.814.745 1.505 1.433 2.193.688.688 1.379 1.113 2.193 1.433.808.297 1.736.5 3.135.558 1.4.057 1.771.072 5.392.072s3.992-.015 5.392-.072c1.399-.058 2.327-.261 3.135-.558.814-.32 1.505-.745 2.193-1.433.688-.688 1.113-1.379 1.433-2.193.297-.808.5-1.736.558-3.135.057-1.4.072-1.771.072-5.392s-.015-3.992-.072-5.392zm-4.015 9.65c0-2.761-2.24-5.001-5.002-5.001s-5.002 2.24-5.002 5.001 2.24 5.001 5.002 5.001 5.002-2.24 5.002-5.001zm-1.308 0c0 2.04-1.654 3.694-3.694 3.694s-3.694-1.654-3.694-3.694 1.654-3.694 3.694-3.694 3.694 1.654 3.694 3.694z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              {community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-4 md:mb-0">
                Get notified about new scholarships, courses, and educational
                opportunities.
              </p>
            </div>
            <div className="md:ml-8">
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-500 md:mt-0 md:order-1">
              © {currentYear} elimikabure. Made with ❤️ for African students.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
