import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Home } from '@/app/components/Home';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';

export default function App() {

  const [activeSection, setActiveSection] = useState('Home');

  // Scroll to section or show Contact page
  const handleNavigate = (section: string) => {
    if (section === 'Contact') {
      setActiveSection('Contact');
    } else {
      setActiveSection('Home');
      setTimeout(() => {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 10);
    }
  };

  // Update activeSection based on scroll position
  useEffect(() => {
    if (activeSection === 'Contact') return;
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects'];
      const offsets = sections.map(id => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top - 80) }; // 80px offset for nav
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id.charAt(0).toUpperCase() + closest.id.slice(1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <div className="pt-20">
        {activeSection === 'Contact' ? (
          <Contact />
        ) : (
          <>
            <section id="home"><Home onNavigate={handleNavigate} /></section>
            <section id="about"><About onNavigate={handleNavigate} /></section>
            <section id="projects"><Projects /></section>
          </>
        )}
      </div>
    </div>
  );
}