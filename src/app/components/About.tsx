interface AboutProps {
  onNavigate: (section: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Java', 'C#',
    'Git', 'GitHub', 'Figma'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-0">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 mb-6 sm:mb-8 text-center lg:text-left">About Me</h2>
            <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base text-center lg:text-left">
              I'm Kurt Russell C. Dichosa, a 20 year old 3rd year College student currently residing in Brgy. Punta, Ormoc City, Philippines. Aspiring to be a network engineer, I am driven by a strong interest in designing, managing, and maintaining efficient network infrastructures. I am currently developing my skills in computer networking, where I am gaining valuable knowledge in network fundamentals, hardware protocols, and troubleshooting, preparing myself for a future career in the field of information technology
            </p>
            
            <button
              onClick={() => onNavigate('Contact')}
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors inline-flex items-center gap-2 mb-8 sm:mb-12 mx-auto lg:mx-0"
            >
              Contact Me
              <span className="text-xl">👆</span>
            </button>

            {/* Skills Section */}
            <div>
              <h3 className="text-lg sm:text-xl text-white mb-4 text-center lg:text-left">Skills</h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 sm:px-5 py-2 bg-transparent border border-cyan-400 text-cyan-400 rounded-full text-xs sm:text-sm hover:bg-cyan-400/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
            <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden bg-gray-800">
                <img
                  src="/gegege.png"
                  alt="About"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}