import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./styles/global.css";
import { Github, Mail, FileText, Linkedin } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Mission Planner System",
    description:
      "A lightweight mission coordination dashboard built with Python, Flask, and PostgreSQL to simulate real-world logistical planning workflows.",
    link: "https://github.com/vitdn98",
    tags: ["Python", "Flask", "PostgreSQL", "Docker"],
  },
  {
    title: "Air Quality Sentiment Analyzer",
    description:
      "NLP-based dashboard for sentiment analysis of air quality reports using Flask, Python, and Jupyter.",
    link: "https://github.com/vitdn98",
    tags: ["NLP", "Python", "Flask", "Data Visualization"],
  },
  {
    title: "Distributed File System Simulator",
    description:
      "High-concurrency file system simulation in C++ with multithreading and resource access synchronization.",
    link: "https://github.com/vitdn98",
    tags: ["C++", "Multithreading", "Systems Programming"],
  },
  {
    title: "Campus Navigation Web App",
    description:
      "Full-stack app to display campus resource availability using Flask, MySQL, HTML/CSS/JavaScript.",
    link: "https://github.com/vitdn98",
    tags: ["Full-stack", "Flask", "MySQL", "JavaScript"],
  },
];

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-4 md:p-8 font-sans">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with animated gradient text */}
        <header className="text-center mb-16 pt-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient">
            Douglas Nguyen
          </h1>
          <p className="text-xl mt-4 text-gray-300">
            Computer Science Graduate | Rockville, MD
          </p>
          <div className="flex flex-wrap justify-center mt-6 gap-3">
            <a href="mailto:douglasnguyen181@gmail.com">
              <Button
                variant="outline"
                className="group bg-transparent border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                <Mail className="mr-2 w-4 h-4 group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-blue-400 transition-colors">
                  Email
                </span>
              </Button>
            </a>
            <a
              href="https://github.com/vitdn98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="group bg-transparent border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                <Github className="mr-2 w-4 h-4 group-hover:text-purple-400 transition-colors" />
                <span className="group-hover:text-purple-400 transition-colors">
                  GitHub
                </span>
              </Button>
            </a>
            <a href="/assets/Douglas_Nguyen_Resume_Intern.pdf" target="Blank">
              <Button
                variant="outline"
                className="group bg-transparent border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                <FileText className="mr-2 w-4 h-4 group-hover:text-indigo-400 transition-colors" />
                <span className="group-hover:text-indigo-400 transition-colors">
                  Résumé
                </span>
              </Button>
            </a>
            <Button
              variant="outline"
              className="group bg-transparent border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
            >
              <Linkedin className="mr-2 w-4 h-4 group-hover:text-blue-500 transition-colors" />
              <span className="group-hover:text-blue-500 transition-colors">
                LinkedIn
              </span>
            </Button>
          </div>
        </header>

        {/* About Me Section */}
        <section className="mb-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Passionate about writing software that powers configurable systems
            and excited about platform engineering. With a strong foundation in
            backend development and systems design, I enjoy solving real-world
            problems through elegant, scalable code. Currently improving my
            skills in Java performance tuning and open to mentorship and
            collaboration opportunities in the DC Metro Area.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs bg-gray-700/50 rounded-full text-blue-300 border border-gray-600">
              Backend Development
            </span>
            <span className="px-3 py-1 text-xs bg-gray-700/50 rounded-full text-purple-300 border border-gray-600">
              Systems Design
            </span>
            <span className="px-3 py-1 text-xs bg-gray-700/50 rounded-full text-indigo-300 border border-gray-600">
              Java
            </span>
            <span className="px-3 py-1 text-xs bg-gray-700/50 rounded-full text-green-300 border border-gray-600">
              Python
            </span>
            <span className="px-3 py-1 text-xs bg-gray-700/50 rounded-full text-yellow-300 border border-gray-600">
              Flask
            </span>
            <span className="px-3 py-1 text-xs bg-gray-700/50 rounded-full text-red-300 border border-gray-600">
              C++
            </span>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700 rounded-xl shadow-lg hover:shadow-xl hover:border-gray-600 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-gray-700/30 rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Education
          </h2>
          <div className="space-y-6">
            <div className="relative pl-8 before:absolute before:left-2 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-blue-400 before:ring-4 before:ring-blue-400/20">
              <h3 className="font-bold text-lg text-white">
                University of Maryland, Baltimore County
              </h3>
              <p className="text-gray-300">
                B.S. in Computer Science – GPA: 3.3/4.0
              </p>
              <p className="text-gray-400 mt-1">
                Relevant Courses: Software Engineering, OS, AI, Algorithms, Data
                Analysis
              </p>
            </div>
            <div className="relative pl-8 before:absolute before:left-2 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-purple-400 before:ring-4 before:ring-purple-400/20">
              <h3 className="font-bold text-lg text-white">
                Montgomery College
              </h3>
              <p className="text-gray-300">
                A.A. in Computer Science – GPA: 3.79/4.0
              </p>
              <p className="text-gray-400 mt-1">
                Phi Theta Kappa Honor Society
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-blue-400 before:to-purple-600">
              <div className="relative pl-6">
                <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-blue-400 ring-4 ring-blue-400/20"></div>
                <h3 className="font-bold text-lg text-white">Self-employed</h3>
                <p className="text-gray-400">
                  Full-stack Software Engineer – 2024–Present
                </p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex-shrink-0 text-blue-400">
                      •
                    </span>
                    <span>
                      Designing, developing, and implementing AI-based
                      applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex-shrink-0 text-blue-400">
                      •
                    </span>
                    <span>
                      Designed modular APIs and handled backend logic in Flask
                      with PostgreSQL integration.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex-shrink-0 text-blue-400">
                      •
                    </span>
                    <span>
                      Applied logging, error handling, and testing frameworks to
                      ensure system reliability.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-purple-400 before:to-indigo-600">
              <div className="relative pl-6">
                <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-purple-400 ring-4 ring-purple-400/20"></div>
                <h3 className="font-bold text-lg text-white">
                  Norbeck Country Club
                </h3>
                <p className="text-gray-400">
                  Server / IT Support – 2021–Present
                </p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex-shrink-0 text-purple-400">
                      •
                    </span>
                    <span>
                      Provided real-time AV and tech support for events.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex-shrink-0 text-purple-400">
                      •
                    </span>
                    <span>
                      Handled Linux scripting and driver troubleshooting.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex-shrink-0 text-purple-400">
                      •
                    </span>
                    <span>Documented setups to streamline team workflows.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-indigo-400 before:to-blue-600">
              <div className="relative pl-6">
                <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-indigo-400 ring-4 ring-indigo-400/20"></div>
                <h3 className="font-bold text-lg text-white">
                  Montgomery College
                </h3>
                <p className="text-gray-400">
                  Student Assistant, Counseling/Advising – 2019–2021
                </p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex-shrink-0 text-indigo-400">
                      •
                    </span>
                    <span>Managed scheduling for 100+ students weekly.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex-shrink-0 text-indigo-400">
                      •
                    </span>
                    <span>
                      Enhanced workflow with Excel-based tracking tools.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex-shrink-0 text-indigo-400">
                      •
                    </span>
                    <span>Prepared reports for department leadership.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-20 text-gray-500 text-sm pb-12">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="mailto:douglasnguyen181@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/vitdn98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="/assets/Douglas_Nguyen_Resume_Intern.pdf"
              target="Blank"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>
          © {new Date().getFullYear()} Douglas Nguyen. All rights reserved.
        </footer>
      </div>
    </main>
  );
};

export default App;
