import Button from "../atoms/Button";

export function CardProject({ image, url, title, description, logo }) {
  return (
    <Button
      {...(url
        ? { href: url, target: "_blank", rel: "noopener noreferrer" }
        : { as: "div", role: "button" })}
      className="primary-color w-80 p-4 rounded-lg shadow-md flex flex-col transition-transform duration-300 hover:scale-105 max-w-sm mx-auto overflow-hidden group"
    >
      <img
        src={image}
        alt={title}
        className="object-cover rounded-lg my-4 shadow-lg w-full h-40 group-hover:shadow-xl transition-shadow duration-300"
      />
      <div className="flex flex-col flex-grow w-full gap-4 text-black dark:text-white">
        <div className="h-20">
          <h2 className="text-lg font-semibold text-center mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h2>
          <p className="text-sm text-center m-2 text-ellipsis overflow-hidden flex-grow">
            {description}
          </p>
        </div>
        <div>
          <div className="mb-2">
            {logo && (
              <div className="flex justify-center items-center gap-2 bg-icon p-2 rounded-lg">
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
        </div>
      </div>
    </Button>
  );
}
