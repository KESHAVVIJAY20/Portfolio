import projects from "../data/Projects.jsx";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Projects() {
  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      <Header />

      {/* Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        <h1 className="text-4xl font-bold text-center mb-4">
          My Projects
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          A collection of projects showcasing my skills in building modern,
          scalable, and user-friendly web applications.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default Projects;