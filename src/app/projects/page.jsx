import { CardProject } from "@/components/molecules/CardProject";
import ProjectData from "@/data/project_data";

export default function Project() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 mt-4">My Projects</h1>
      <p className="text-lg text-center mb-6">
        Hi, I&apos;m a passionate programmer with experience in various
        technologies. Explore my projects and get to know more about my work.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ProjectData.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
