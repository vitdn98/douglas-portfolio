import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText } from "lucide-react";

// Define a type for the project object
interface Project {
  title: string;
  description: string;
  link: string;
}

// Define an array of projects with the Project type
const projects: Project[] = [
  {
    title: "Mission Planner System",
    description:
      "A lightweight mission coordination dashboard built with Python, Flask, and PostgreSQL to simulate real-world logistical planning workflows. The system enables assignment of personnel, equipment, and locations, with modular backend architecture and Docker-based containerization for streamlined deployment and testing.",
    link: "https://github.com/vitdn98", // Replace with actual project repo if available
  },
  {
    title: "Air Quality Sentiment Analyzer",
    description:
      "NLP-based dashboard for sentiment analysis of air quality reports using Flask, Python, and Jupyter.",
    link: "https://github.com/vitdn98", // Replace with actual project repo if available
  },
  {
    title: "Distributed File System Simulator",
    description:
      "High-concurrency file system simulation in C++ with multithreading and resource access synchronization.",
    link: "https://github.com/vitdn98",
  },
  {
    title: "Campus Navigation Web App",
    description:
      "Full-stack app to display campus resource availability using Flask, MySQL, HTML/CSS/JavaScript.",
    link: "https://github.com/vitdn98",
  },
];

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold">Douglas Nguyen</h1>
        <p className="text-lg mt-2 text-gray-400">
          Software Engineer | Rockville, MD
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="mailto:douglasnguyen181@gmail.com">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              <Mail className="mr-2 w-4 h-4" /> Email
            </Button>
          </a>
          <a
            href="https://github.com/vitdn98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              <Github className="mr-2 w-4 h-4" /> GitHub
            </Button>
          </a>
          <a href="/assets/Douglas_Nguyen_Resume_Intern.pdf" target="Blank">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              <FileText className="mr-2 w-4 h-4" /> Résumé
            </Button>
          </a>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
          About Me
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Passionate about writing software that powers configurable systems and
          excited about platform engineering. With a strong foundation in
          backend development and systems design, I enjoy solving real-world
          problems through elegant, scalable code. Currently improving my skills
          in Java performance tuning and open to mentorship and collaboration
          opportunities in the DC Metro Area.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white text-black rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-700">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black underline hover:text-gray-800"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">
              University of Maryland, Baltimore County
            </h3>
            <p>B.S. in Computer Science – GPA: 3.3/4.0</p>
            <p className="text-gray-400">
              Relevant Courses: Software Engineering, OS, AI, Algorithms, Data
              Analysis
            </p>
          </div>
          <div>
            <h3 className="font-bold">Montgomery College</h3>
            <p>A.A. in Computer Science – GPA: 3.79/4.0</p>
            <p className="text-gray-400">Phi Theta Kappa Honor Society</p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Experience
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Self-employed</h3>
            <p>Full-stack Software Engineer – 2024–Present</p>
            <ul className="list-disc list-inside text-gray-400">
              <li>
                Designing, developing, and implementing AI-based applications
              </li>
              <li>
                Designed modular APIs and handled backend logic in Flask with
                PostgreSQL integration.
              </li>
              <li>
                Applied logging, error handling, and testing frameworks to
                ensure system reliability.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Norbeck Country Club</h3>
            <p>Server / IT Support – 2021–Present</p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Provided real-time AV and tech support for events.</li>
              <li>Handled Linux scripting and driver troubleshooting.</li>
              <li>Documented setups to streamline team workflows.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Montgomery College</h3>
            <p>Student Assistant, Counseling/Advising – 2019–2021</p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Managed scheduling for 100+ students weekly.</li>
              <li>Enhanced workflow with Excel-based tracking tools.</li>
              <li>Prepared reports for department leadership.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center mt-20 text-gray-600 text-sm">
        © 2025 Douglas Nguyen. All rights reserved.
      </footer>
    </main>
  );
};

export default App;
