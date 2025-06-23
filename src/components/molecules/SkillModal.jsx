import React from "react";
import Button from "../atoms/Button";

export default function SkillModal({ isOpen, onClose, skill }) {
  if (!isOpen || !skill) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col w-full max-w-md justify-center items-center rounded-xl bg-white p-6 shadow-xl m-10">
        <h2 className="mb-4 text-2xl font-bold">{skill.name}</h2>
        <div className="mb-4 text-gray-700">
          {Array.isArray(skill.description) ? (
            skill.description.map((desc, i) => (
              <p key={i} className="mb-2 last:mb-0">
                - {desc}
              </p>
            ))
          ) : (
            <p className="mb-2 last:mb-0">- {skill.description}</p>
          )}
        </div>
        <Button
          href="#"
          onClick={onClose}
          className="mt-4 rounded bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
        >
          Close
        </Button>
      </div>
    </div>
  );
}
