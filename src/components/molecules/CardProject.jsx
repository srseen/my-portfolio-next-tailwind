import Button from "../atoms/Button";

export function CardProject({ image, title, description }) {
  return (
    <Button
      href="#"
      className="primary-color w-full h-auto p-4 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <div className="text-white flex-grow flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </Button>
  );
}
