import Button from "../atoms/Button";

export function CardProject({ image, url, title, description, logo }) {
  return (
    <Button
      {...(url
        ? { href: url, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="primary-color w-80 h-96 p-4 rounded-lg shadow-md flex flex-col justify-between items-center transition-transform duration-300 hover:scale-105 max-w-sm mx-auto overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="object-cover rounded-lg my-4 shadow-lg w-full h-40"
      />
      <div className="text-white flex flex-col justify-between items-center flex-grow w-full">
        <h2 className="text-lg font-semibold text-black dark:text-white text-center mb-2 flex-grow-0">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </h2>
        <p className="text-sm text-black dark:text-white text-center flex-grow mb-4 overflow-hidden text-ellipsis flex-grow">
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
        {logo && (
          <div className="flex flex-wrap justify-center items-center gap-2 secondary-color p-2 rounded-full mt-auto self-center flex-grow-0">
            {logo.map((logoItem, index) => (
              <img
                key={index}
                src={logoItem}
                alt="Tech Logo"
                className="w-8 h-8 object-contain"
              />
            ))}
          </div>
        )}
      </div>
    </Button>
  );
}
