import Button from "../atoms/Button";

export function CardSkill({ name, skill }) {
  return (
    <div className="primary-color h-full w-full p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">{name}</h2>
      <div className="flex flex-wrap gap-2">
        {skill &&
          Array.isArray(skill) &&
          skill.map((skill, index) => (
            <Button
              href="#"
              key={index}
              className="bg-gray-400 dark:bg-gray-500 w-auto px-4 py-2 text-sm"
            >
              <span className="whitespace-nowrap">{skill}</span>
            </Button>
          ))}
      </div>
    </div>
  );
}
export function CardProject({ title, description }) {
  return (
    <div className="primary-color p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
