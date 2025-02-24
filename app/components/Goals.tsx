import React from 'react';
import '../app.css';

const Goals: React.FC = () => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-card-bg-light dark:bg-card-bg-dark">
      <h2 className="text-card-h2-light dark:text-card-h2-dark font-bold">Goals</h2>
      <ul className="text-card-paragraph-light dark:text-card-paragraph-dark mt-2 space-y-2">
        {[
          "Lorem ipsum dolor sit amet...",
          "Lorem ipsum dolor sit amet...",
          "Lorem ipsum dolor sit amet...",
          "Lorem ipsum dolor sit amet...",
          "Lorem ipsum dolor sit amet...",
        ].map((goal, index) => (
          <li key={index} className="flex items-center">
            <span className="w-4 h-1 bg-list-bullet-light dark:bg-list-bullet-dark mr-2 rounded-full"></span>
            {goal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
