export default function Project() {
  return (
    <div className="max-w-full max-h-full">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Hi, I&apos;m a passionate programmer with experience in various
          technologies. Explore my projects and get to know more about my work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Project 1
            </h2>
            <p className="text-gray-600">Description of project 1.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Project 2
            </h2>
            <p className="text-gray-600">Description of project 2.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Project 3
            </h2>
            <p className="text-gray-600">Description of project 3.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Project 4
            </h2>
            <p className="text-gray-600">Description of project 4.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
