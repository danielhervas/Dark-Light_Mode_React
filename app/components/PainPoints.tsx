import '../app.css';
const PainPoints: React.FC = () => {
    return (
      <div className="p-4 rounded-lg shadow-md bg-card-bg-light dark:bg-card-bg-dark">
        <h2 className="text-card-h2-light dark:text-card-h2-dark font-bold">Pain Points</h2>
        <ul className="text-card-paragraph-light dark:text-card-paragraph-dark mt-2 space-y-2">
          {["Lorem ipsum dolor sit amet...", "Lorem ipsum dolor sit amet...", "Lorem ipsum dolor sit amet...", "Lorem ipsum dolor sit amet..."].map((point, index) => (
            <li key={index} className="flex items-center">
              <span className="w-4 h-1 bg-list-bullet-light dark:bg-list-bullet-dark mr-2 rounded-full"></span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PainPoints;
  