const Personality: React.FC = () => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-card-bg-light dark:bg-card-bg-dark">
      <h2 className="text-card-h2-light dark:text-card-h2-dark font-bold">Personality</h2>
      <ul className="text-card-paragraph-light dark:text-card-paragraph-dark mt-2 space-y-2">
        {["Hardworking", "Smart", "Expressive", "Thoughtful"].map((trait) => (
          <li key={trait} className="flex items-center">
            <span className="w-4 h-1 bg-list-bullet-light dark:bg-list-bullet-dark mr-2 rounded-full"></span>
            {trait}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Personality;
