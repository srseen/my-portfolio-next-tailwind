export default function About() {
  return (
    <div className="max-w-full max-h-full">
      <div className="max-w-7xl mx-auto p-16 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
            About Me
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-3xl mb-6">
            Hello! I&lsquo;m a passionate developer with a love for creating
            beautiful and functional web applications. With a strong foundation
            in React and a keen eye for design, I strive to build user-friendly
            and efficient solutions.
          </p>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Purpose of This Website
          </h3>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            This website serves as a portfolio to showcase my projects and
            skills. It is designed to provide potential employers and
            collaborators with an insight into my work and capabilities. Feel
            free to explore and reach out if you have any questions or
            opportunities!
          </p>
        </div>
      </div>
    </div>
  );
}
