import { Facebook, Github, Mail } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-0">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Social Icons */}
        <div className="flex md:flex-col gap-6 order-3 md:order-1">
          <a href="https://www.facebook.com/k1ditch" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://github.com/sk2d3" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Profile Image */}
        <div className="relative order-1 md:order-2">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 overflow-hidden">
            <img
              src="/pogi.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl text-center md:text-left order-2 md:order-3">
          <p className="text-gray-400 mb-2 text-sm sm:text-base">
            Hello there, I am
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6">Kurt Dichosa</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-400 mb-8">Aspiring Network Engineer</h2>
        </div>
      </div>
    </section>
  );
}