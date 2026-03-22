import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className="cursor-pointer bg-white rounded-2xl shadow-lg hover:scale-105 transition p-4"
    >
      <img
        src={project.image}
        className="rounded-xl h-48 w-full object-contain"
      />

      <h2 className="text-xl font-semibold mt-3">{project.title}</h2>

      <div className="flex flex-wrap gap-2 mt-2">
        {project.tech.map((t, i) => (
          <span key={i} className="text-sm bg-gray-200 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;