import Button from "../atoms/Button";

export function CardProject({ image, url, title, description, logo }) {
  return (
    <Button
      {...(url ? { href: url, target: "_blank" } : {})}
      className="primary-color w-full h-full p-4 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      <div className="text-white flex flex-col items-center w-full flex-1">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2 text-black dark:text-white">
          {title}
        </h2>
        <p className="text-sm line-clamp-3 mb-2 text-black dark:text-white">
          {description}
        </p>

        {logo && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
            {logo.map((logoItem, index) => (
              <img
                key={index}
                src={logoItem}
                alt="Tech Logo"
                className="w-8 h-8"
              />
            ))}
          </div>
        )}
      </div>
    </Button>
  );
}
