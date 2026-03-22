import { useParams } from "react-router-dom";
import projects from "../data/Projects.jsx";
import Header from "../components/Header.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  const relatedProjects = projects.filter(
    (p) => p.id !== parseInt(id)
  );

  return (
    <div>
      <Header />
      <div className="p-10">
        <img
          src={project.image}
          className="w-full h-80 object-contain rounded-xl border-2 border-gray-300"
        />

        <h1 className="text-3xl font-bold mt-5">{project.title}</h1>

        <p className="mt-3 text-gray-600">{project.description}</p>

        <div className="flex gap-4 mt-5">
          <a
            href={project.github}
            target="_blank"
            className="bg-black text-white px-4 py-2 rounded"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Live Demo
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10 p-10">
          {relatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
