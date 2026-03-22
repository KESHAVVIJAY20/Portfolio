import projects from "../data/Projects.jsx";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Projects() {
  return (
      <div className="">
        <Header/>
      <h1 className="text-3xl font-bold mb-8 text-center mt-10">
        My Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10 p-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;