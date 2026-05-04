import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className="group cursor-pointer relative bg-white/5 border border-white/10 
      rounded-2xl overflow-hidden backdrop-blur-lg 
      hover:bg-white/10 transition duration-300"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-52 w-full object-contain rounded-t-2xl 
          group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-white">{project.title}</h2>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md 
              bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* HOVER OVERLAY */}
      <div
        className="absolute inset-0 bg-indigo-500/10 opacity-0 
      group-hover:opacity-100 transition duration-300"
      ></div>

      {/* BOTTOM GLOW */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 
      bg-gradient-to-t from-[#0B0F19] to-transparent"
      ></div>
    </div>
  );
}

export default ProjectCard;
