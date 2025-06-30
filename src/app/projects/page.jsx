"use client";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { CardProject } from "@/components/molecules/CardProject";
import Button from "@/components/atoms/Button";
import ProjectData from "@/data/project_data";

export default function Project() {
  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define mobile breakpoint

  let projectsPerPage;
  let totalPages;
  let startIndex;
  let endIndex;
  let currentProjects;

  if (isMobile) {
    currentProjects = ProjectData; // Show all projects on mobile
  } else {
    projectsPerPage = 4;
    totalPages = Math.ceil(ProjectData.length / projectsPerPage);
    startIndex = currentPage * projectsPerPage;
    endIndex = startIndex + projectsPerPage;
    currentProjects = ProjectData.slice(startIndex, endIndex);
  }
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="w-full mx-auto p-2">
      <h1 className="text-4xl font-bold text-center mb-6 mt-4">My Projects</h1>
      <p className="text-lg text-center mb-6">
        Hi, I&apos;m a passionate programmer with experience in various
        technologies. Explore my projects and get to know more about my work.
      </p>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4 auto-rows-fr">
          {currentProjects.map((project, index) => (
            <CardProject
              key={index}
              image={project.image.replace("/public", "")}
              url={project.url}
              title={project.title}
              description={project.description}
              logo={project.logo?.map((logoPath) =>
                logoPath.replace("/public", "")
              )}
            />
          ))}
        </div>
        {!isMobile && ( // Conditionally render pagination for non-mobile
          <div className="flex flex-row items-center justify-center m-4 gap-4">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="bg-icon text-black dark:text-white disabled:opacity-60"
            >
              Previous
            </Button>
            <div className="">
              <p>
                {currentPage + 1}/{totalPages}
              </p>
            </div>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="bg-icon text-black dark:text-white disabled:opacity-60"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
