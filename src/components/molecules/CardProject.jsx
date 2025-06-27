import Button from "../atoms/Button";

export function CardProject({ image, url, title, description, logo }) {
  return (
    <Button
      {...(url
        ? { href: url, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="primary-color w-full h-full p-4 rounded-lg shadow-md flex flex-col transition-transform duration-300 hover:scale-105 max-w-sm mx-auto justify-between"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg my-4 shadow-lg"
      />

      <div className="text-white flex flex-col w-full flex-1 justify-between items-center">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2 text-black dark:text-white text-center">
          {title}
        </h2>
        <p className="text-sm line-clamp-3 mb-4 text-black dark:text-white text-center w-full">
          {description}
        </p>
        {logo && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-auto secondary-color p-2 rounded-full self-center">
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
