import userImage from "../assets/rectangulo_chica.png";

const UserCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-4 rounded-2xl shadow-md bg-body-bg-bio-light dark:bg-card-bg-dark transition duration-300 h-full">
        <img
          src={userImage}
          alt="User"
          className="rounded-xl object-cover"
        />
        <div className="mt-10 text-card-paragraph-light dark:text-card-paragraph-dark transition duration-300">
          <div className="flex justify-start gap-8 items-start mt-2">
            <strong className="text-card-paragraph-dark w-32">Name:</strong>
            <span>35</span>
          </div>
          <div className="flex justify-start gap-8 items-start mt-2">
            <strong className="text-card-paragraph-dark w-32">Age:</strong>
            <span>Married, 2 Kids</span>
          </div>
          <div className="flex justify-start gap-8 items-start mt-2">
            <strong className="text-card-paragraph-dark w-32">Education:</strong>
            <span>University of Calgary</span>
          </div>
          <div className="flex justify-start gap-8 items-start mt-2">
            <strong className="text-card-paragraph-dark w-32">Location:</strong>
            <span>Calgary, Alberta</span>
          </div>
          <div className="flex justify-start gap-8 items-start mt-2">
            <strong className="text-card-paragraph-dark w-32">Job:</strong>
            <span>Family Physician</span>
          </div>
          <div className="flex justify-start gap-8 items-start mt-2">
            <strong className="text-card-paragraph-dark w-32">Hobbies:</strong>
            <span>Hiking and dancing</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserCard;
