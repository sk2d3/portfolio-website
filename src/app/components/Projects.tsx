import phb from "./../../../public/phb.png";
export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Laundry Website',
      description: 'Modern laundry service website with online booking',
      image: '/public/labamoto.png',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 2,
      title: 'Medisense Website',
      description: 'Healthcare platform for medicine services',
      image: '/public/med.png',
      gradient: 'from-gray-500/20 to-black/20'
    },
    {
      id: 3,
      title: 'PHB Online Website',
      description: 'A web platform for Online Banking services',
      image: phb,
      gradient: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-24">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 text-center mb-12 sm:mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer h-80 flex flex-col"
            >
              <div className="aspect-video relative w-full h-2/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`} />
              </div>
              <div className="h-1/2 flex flex-col items-center justify-start text-center p-4 sm:p-6 pt-2 bg-[#101623] w-full min-h-[70px]">
                <h3 className="text-lg sm:text-xl text-white font-semibold mb-1 break-words">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 break-words whitespace-normal">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}