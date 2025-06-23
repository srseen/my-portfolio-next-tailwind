import SkillsData from "@/data/skills_data.jsx";

function SkillSection({ title, skills }) {
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name} className="mb-4">
            <h3 className="text-lg font-bold">{skill.name}</h3>
            {Array.isArray(skill.description) ? (
              skill.description.map((desc) => (
                <p key={desc} className="block">
                  - {desc}
                </p>
              ))
            ) : (
              <p className="block">- {skill.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const frontendSkills = SkillsData.find(
    (category) => category.category === "Frontend"
  );
  const backendSkills = SkillsData.find(
    (category) => category.category === "Backend"
  );
  const databaseSkills = SkillsData.find(
    (category) => category.category === "Database"
  );
  const devOpsSkills = SkillsData.find(
    (category) => category.category === "DevOps"
  );

  const testingSkills = SkillsData.find(
    (category) => category.category === "Testing"
  );

  return (
    <div className="flex flex-col items-center justify-center mx-10">
      <h1 className="text-4xl font-bold mb-6 text-center mt-4">Skills</h1>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full md:w-1/3 lg:w-1/5">
          <SkillSection title="Frontend" skills={frontendSkills.skills} />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5">
          <SkillSection title="Backend" skills={backendSkills.skills} />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5">
          <SkillSection title="Database" skills={databaseSkills.skills} />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5">
          <SkillSection title="DevOps" skills={devOpsSkills.skills} />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5">
          <SkillSection title="Testing" skills={testingSkills.skills} />
        </div>
      </div>
    </div>
  );
}
