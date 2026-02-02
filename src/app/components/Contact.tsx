import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-24">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 text-center mb-12 sm:mb-16">Contact Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left - Contact Info */}
          <div className="flex-1 space-y-6 w-full">
            <div className="flex items-center gap-4 text-gray-300 text-sm sm:text-base">
              <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="break-all">dichosakurt05@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300 text-sm sm:text-base">
              <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>09629677623</span>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300 text-sm sm:text-base">
              <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>Leyte, Philippines</span>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </button>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Send className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="flex-1 w-full">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-transparent border border-cyan-400 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-300 transition-colors text-sm sm:text-base"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-transparent border border-cyan-400 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-300 transition-colors text-sm sm:text-base"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-transparent border border-cyan-400 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-300 transition-colors resize-none text-sm sm:text-base"
                />
              </div>
              
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 bg-cyan-400 text-black rounded hover:bg-cyan-300 transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}