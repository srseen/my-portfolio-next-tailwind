export function CardProject({ title, description }) {
  return (
    <div className="primary-color p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
