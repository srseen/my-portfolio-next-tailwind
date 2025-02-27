import SkillsData from "@/data/skills_data.jsx";

export default function Skills() {
  const frontendSkills = SkillsData.find(
    (category) => category.category === "Frontend"
  );
  const backendSkills = SkillsData.find(
    (category) => category.category === "Backend"
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-center ">Skills</h1>
      <div className="flex justify-between">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 ">Frontend</h2>
          <ul>
            {frontendSkills.skills.map((skill) => (
              <li key={skill.name} className="mb-4">
                <h3 className="text-lg font-bold ">{skill.name}</h3>
                <p>- {skill.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Backend</h2>
          <ul>
            {backendSkills.skills.map((skill) => (
              <li key={skill.name} className="mb-4">
                <h3 className="text-lg font-bold ">{skill.name}</h3>
                <p>- {skill.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
