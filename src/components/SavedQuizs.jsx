

const SavedQuizs = ({quizs}) => {
  return (
    <>
      <main className=" py-4 bg-dark">
        <div className="container container-fluid">
          <h1 className="text-light my-4">
            Total Saved Questions: {quizs.length}
          </h1>
          {quizs && quizs.length > 0 ? (
            quizs.map((quiz, index) => (
              <div
                className="card bg-secondary text-light shadow-lg border-0 p-4 mb-2"
                style={{ maxWidth: "650px", margin: "auto" }}
              >
                <h5 className="mb-4">
                  Q{index + 1}. {quiz.question}
                </h5>

                <ul className="list-group">
                  {quiz.options.map((option, index) => (
                    <li
                      key={index}
                      className="list-group-item bg-dark text-light border-secondary mb-2 rounded option-hover"
                      style={{ cursor: "pointer" }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 small text-light-50">
                  <p>
                    <strong>Subject:</strong> {quiz.subject}
                  </p>
                  <p>
                    <strong>Topic:</strong> {quiz.topic}
                  </p>
                  <p>
                    <strong>Answer:</strong> {quiz.answer}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No quizs found.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default SavedQuizs;
