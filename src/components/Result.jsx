const Result = ({ questions, correctAnswers }) => {
  const percentage = ((correctAnswers / questions) * 100).toFixed(0);

  return (
    <div className="card bg-secondary text-light text-center shadow-lg border-0 p-5">
      <h2 className="mb-3">Your Score</h2>
      <h3 className="mb-3">
        {correctAnswers} / {questions}
      </h3>
      <p className="fs-5">
        {percentage}% Correct
      </p>
    </div>
  );
};


export default Result;
