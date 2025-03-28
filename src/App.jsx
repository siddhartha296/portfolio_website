import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      {/* Decorative Elements */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-16 space-y-4">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            SIDDHARTHA PITTALA
          </h1>
          <p className="text-xl text-blue-200">Aspiring Computer Science enthusiast</p>
          <div className="flex justify-center gap-4 flex-wrap text-sm">
            <a href="tel:+917569775627" className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              📞 +91 7569775627
            </a>
            <a href="mailto:siddharthapittala.dev@gmail.com" className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              ✉️ Email
            </a>
            <a href="https://github.com/siddhartha296" target="_blank" className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </span>
            </a>
            <a href="https://www.linkedin.com/in/siddhartha-pittala-036001254/" target="_blank" className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                LinkedIn
              </span>
            </a>
            <span className="px-4 py-2 bg-white/10 rounded-full">
              📍 Vijayawada
            </span>
          </div>
        </header>

        {/* Main Sections */}
        <div className="space-y-16">
          {/* Summary */}
          <section className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 transform hover:scale-[1.01] transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Summary</h2>
            <p className="text-gray-300 leading-relaxed">
              Hello !,I am Siddhartha pittala, a computer science enthusiast with experience in web development, 
              including building and deploying websites using React and Google Firebase for college startups. 
              I have hands-on expertise in AI model deployment and a strong understanding of modern computer 
              science technologies and advancements.Passionate about innovation, I stay updated with the 
              latest trends in AI and development.
            </p>
          </section>

          {/* Experience */}
          <section className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 transform hover:scale-[1.01] transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Experience</h2>
            <div className="space-y-4">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                    <img 
                      src={import.meta.env.BASE_URL + 'Sap.png'}
                      alt="SAP Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300">Full Stack AI Engineer</h3>
                    <p className="text-blue-200 text-sm">Screen Andragogy Platforms (SAP) • Feb 2025 - Present</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">Vijayawada, Andhra Pradesh, India · On-site</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Building AI integrated websites and tools for SAP</li>
                  <li>Working with MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                  <li>Implementing AI solutions and integrating them with web applications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications & Training */}
          <section className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 transform hover:scale-[1.01] transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Certifications & Training</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-purple-300">ACM India Winter School on Cyber Security and Cryptography</h3>
                <p className="text-blue-200 text-sm">VIT Vellore • 11/2023 - 12/2023</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                  <li>Completed comprehensive program on cyber security and cryptography fundamentals</li>
                  <li>Engaged with industry experts to gain practical insights</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-blue-300 mb-6">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 transform hover:scale-[1.02] transition-transform">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">AI Model Deployment</h3>
                <p className="text-sm text-blue-200 mb-3">Personal • 08/2024 - Present</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Local deployment of various AI models using Ollama</li>
                  <li>Integrated web UI for user-friendly interactions</li>
                  <li>Built chat bot functionality for websites</li>
                </ul>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 transform hover:scale-[1.02] transition-transform">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Traffic Control RL System</h3>
                <p className="text-sm text-blue-200 mb-3">Personal • 2024</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Autonomous traffic signal control using RL</li>
                  <li>Dynamic adaptation to traffic conditions</li>
                  <li>Performance comparison with traditional systems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education & Achievements */}
          <div className="grid md:grid-cols-2 gap-6">
            <section className="backdrop-blur-lg bg-white/5 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Education</h2>
              <div>
                <h3 className="text-lg font-semibold text-purple-300">VR Siddhartha Engineering College</h3>
                <p className="text-gray-300">B.Tech in Information Technology (Data Science Honors)</p>
                <p className="text-blue-200 text-sm">CGPA: 9/10 • 2022 - Present</p>
              </div>
            </section>

            <section className="backdrop-blur-lg bg-white/5 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Achievements</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">🏆</span>
                  <span>Rank 7415 in AP EAMCET 2022</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">🎯</span>
                  <span>94% in Intermediate & 90 percentile in JEE Mains</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
