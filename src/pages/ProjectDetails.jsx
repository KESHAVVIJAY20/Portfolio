import { useParams } from "react-router-dom";
import projects from "../data/Projects.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  const relatedProjects = projects.filter((p) => p.id !== parseInt(id));

  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      <Header />

      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* Image */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl shadow-xl h-80 object-contain border-2 border-gray-300"
          />
          <div className="absolute inset-0 bg-indigo-500/10 blur-2xl -z-10"></div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mt-10">{project.title}</h1>

        {/* Description */}
        <p className="mt-5 text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <a
            href={project.github}
            target="_blank"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-white/10 transition"
          >
            View Code
          </a>

          <a
            href={project.live}
            target="_blank"
            className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition"
          >
            Live Demo
          </a>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-10">More Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
