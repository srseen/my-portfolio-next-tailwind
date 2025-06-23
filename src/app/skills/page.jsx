import SkillsData from "@/data/skills_data.jsx";
import { CardSkill } from "@/components/molecules/Card";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center mx-10 m-auto max-w-6xl py-10">
      <h1 className="text-4xl font-bold mb-6 text-center mt-4">My Skills</h1>
      <p className="text-lg text-center mb-6">
        I am a Junior Fullstack Programmer with a passion for learning and
        growing in the field of software development. Here are some of the
        skills I have acquired:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {SkillsData.map((category) => (
          <div key={category.category} className="w-full">
            <CardSkill
              name={category.category}
              skill={category.skills.map((s) => s.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
