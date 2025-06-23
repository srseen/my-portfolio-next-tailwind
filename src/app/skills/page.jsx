"use client";

import { useState } from "react";
import SkillsData from "@/data/skills_data.jsx";
import SkillModal from "@/components/molecules/SkillModal";
import Button from "@/components/atoms/Button";
import skillsData from "@/data/skills_data.jsx";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSkill(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center mx-3 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Skills</h1>
      <p className="text-lg text-center mb-6">
        I am a Junior Fullstack Programmer with a passion for learning and
        growing in the field of software development. Here are some of the
        skills I have acquired:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {skillsData.map((section) => (
          <div
            key={section.category}
            className="p-6 primary-color rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-extrabold text-center mb-6 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
              {section.category}
            </h2>
            <ul className="space-y-4">
              {section.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between rounded-md shadow-sm gap-4"
                >
                  <h3 className="text-xl font-semibold dark:text-white">
                    {skill.name}
                  </h3>
                  <Button
                    href="#"
                    className="bg-gray-400 dark:bg-gray-500 w-36"
                    onClick={() => openModal(skill)}
                  >
                    View Details
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* modal */}
      <SkillModal
        isOpen={isModalOpen}
        onClose={closeModal}
        skill={selectedSkill}
      />
    </div>
  );
}
