import SkillsData from "../../data/skills_data.jsx";

export default function Skills() {
  const frontendSkills = SkillsData.find(
    (category) => category.category === "Frontend"
  );
  const backendSkills = SkillsData.find(
    (category) => category.category === "Backend"
  );

  return (
    <div className="max-w-full max-h-full">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          Skills
        </h1>
        <div className="flex justify-between">
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Frontend</h2>
            <ul>
              {frontendSkills.skills.map((skill) => (
                <li key={skill.name} className="mb-2">
                  <h3 className="text-lg font-bold text-blue-400">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600">{skill.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Backend</h2>
            <ul>
              {backendSkills.skills.map((skill) => (
                <li key={skill.name} className="mb-2">
                  <h3 className="text-lg font-bold text-blue-400">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600">{skill.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
