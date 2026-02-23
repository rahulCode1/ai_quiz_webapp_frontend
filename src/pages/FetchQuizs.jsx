import { useState } from "react";
import { indianSubjects } from "../utils/subjects";
import axios from "axios";
import Result from "../components/Result";
import Quiz from "../components/Quiz";

const FetchQuizs = () => {
  const initialValue = {
    subject: "",
    numberOfQuestions: 0,
    topic: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const [apiResponse, setApiResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [saveIsLoading, setSaveIsLoading] = useState(false)

  const handleGenerateQuestions = async () => {
    if (formData.subject.length === 0 || formData.numberOfQuestions === 0) {
      return alert("Please choose  both input.");
    }

    try {
      setIsLoading(true);
      setApiResponse([]);
      setCount(0);
      let response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/quizs?subject=${formData.subject}&numberOfQuestions=${formData.numberOfQuestions}&topic=${formData.topic && formData.topic}`,
      );
      const parsed = JSON.parse(response.data.quizs);
      setApiResponse(parsed);
      setFormData(initialValue);
      setCorrectAns(0);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChange = (e) => {
    setFormData((prevStat) => ({ ...prevStat, [e.target.id]: e.target.value }));
  };

  const handleSelectOption = (selectedOption) => {
    const currentQuestion = apiResponse[count];
    if (selectedOption + 1 === currentQuestion.correctOption) {
      setCorrectAns((prevCount) => prevCount + 1);
    }

    setCount(count + 1);
  };

  const handleSaveQuizs = async (e, quiz) => {
    e.preventDefault()
    try {
      setSaveIsLoading(true);
  const response =    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/quizs`, quiz);
      console.log(response)
    } catch (error) {
      console.log(error);
    } finally {
      setSaveIsLoading(false);
    }
  };

  return (
    <main className=" bg-dark text-light min-vh-100 py-5">
      <div className="container">
        <div className="row g-3 mb-2">
          <div className="col-12 col-md-6">
            <label htmlFor="subject" className="form-label">
              Choose subject
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={handleOnChange}
              required
              className="form-select bg-secondary text-light border-0"
            >
              <option value="" disabled>
                Select your subject
              </option>
              {indianSubjects.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="numberOfQuestions" className="form-label">
              Number of questions
            </label>
            <input
              type="number"
              id="numberOfQuestions"
              value={formData.numberOfQuestions}
              onChange={handleOnChange}
              className="form-control bg-secondary text-light border-0"
              placeholder="Enter number of questions"
              min={1}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col mb-2">
            <div className="col-12 col-md-6">
              <label htmlFor="topic" className="form-label">
                Name of topic
              </label>
              <input
                type="text"
                id="topic"
                value={formData.topic}
                onChange={handleOnChange}
                className="form-control bg-secondary text-light border-0"
                min={1}
                placeholder="Name of topic"
              />
            </div>
          </div>
          <div className="col">
            <button
              onClick={handleGenerateQuestions}
              className="btn btn-outline-light my-4 w-100 w-md-auto"
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate Questions"}
              {isLoading && (
                <span className="spinner-border spinner-border-sm ms-2"></span>
              )}
            </button>
          </div>
        </div>

        <div className="py-4">
          {isLoading && (
            <div className="text-center">
              <div className="spinner-border text-primary"></div>
            </div>
          )}

          {!isLoading &&
            apiResponse.length > 0 &&
            count >= apiResponse.length && (
              <Result
                questions={apiResponse.length}
                correctAnswers={correctAns}
              />
            )}

          {!isLoading &&
            apiResponse.length > 0 &&
            count < apiResponse.length && (
              <Quiz
                handleSaveQuizs={handleSaveQuizs}
                apiResponse={apiResponse[count]}
                handleSelectOption={handleSelectOption}
                isLoading={saveIsLoading}
              />
            )}
        </div>
      </div>
    </main>
  );
};

export default FetchQuizs;
