const Quiz = ({
  apiResponse,
  handleSelectOption,
  handleSaveQuizs,
  isLoading,
}) => {
  return (
    <div
      className="card bg-secondary text-light shadow-lg border-0 p-4"
      style={{ position: "relative" }}
    >
      <h5 className="mb-4">
        Q{apiResponse.questionNumber}. {apiResponse.question}
      </h5>

      <ul className="list-group">
        {apiResponse.options.map((option, index) => (
          <li
            key={index}
            className="list-group-item bg-dark text-light border-secondary mb-2 rounded option-hover"
            style={{ cursor: "pointer" }}
            onClick={() => handleSelectOption(index)}
          >
            {option}
          </li>
        ))}
      </ul>

      <div className="mt-4 small text-light-50">
        <p>
          <strong>Subject:</strong> {apiResponse.subject}
        </p>
        <p>
          <strong>Topic:</strong> {apiResponse.topic}
        </p>
        <p>
          <strong>Hint:</strong> {apiResponse.hint}
        </p>
      </div>
      <button
      disabled={isLoading}
        onClick={(e) => handleSaveQuizs(e, apiResponse)}
        className="btn bg-white text-dark"
      >
        {isLoading ? "Saveing..." : "Save"}
        {isLoading && (
          <span className="spinner-border spinner-border-sm ms-2"></span>
        )}
      </button>
    </div>
  );
};

export default Quiz;
