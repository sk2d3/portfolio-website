import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { GravityUiCircleLetterD } from './GravityUiCircleLetterD';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  // Optionally, highlight based on scroll position (for advanced UX)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
        <div className="flex items-center">
          <GravityUiCircleLetterD width={32} height={32} className="text-cyan-400 mr-2" />
          <span className="text-white text-lg">Ditch</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigate(item)}
              className={`relative text-white transition-colors hover:text-cyan-400 ${
                activeSection === item ? 'text-cyan-400' : ''
              }`}
            >
              {item}
              {activeSection === item && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cyan-400" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-4">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className={`block w-full text-left px-4 py-2 text-white transition-colors hover:text-cyan-400 ${
                  activeSection === item ? 'text-cyan-400 bg-cyan-400/10 rounded' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}