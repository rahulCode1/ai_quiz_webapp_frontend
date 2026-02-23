import { NavLink } from "react-router";

const Home = () => {
  return (
    <main className="bg-dark text-light min-vh-100 d-flex align-items-center">
      <div className="container text-center py-5">

        {/* Hero Section */}
        <h1 className="display-4 fw-bold mb-4">
          AI Powered Quiz Generator
        </h1>

        <p className="lead text-secondary mb-4">
          Generate smart and exam-focused quizzes instantly using AI.
          Choose your subject, select the number of questions, and start practicing in seconds.
        </p>

        <NavLink
          to="/quizs"
          className="btn btn-primary btn-lg px-4"
        >
          Generate Quiz
        </NavLink>

        {/* Features Section */}
        <div className="row mt-5 g-4">

          <div className="col-12 col-md-4">
            <div className="card bg-secondary text-light border-0 shadow-lg h-100 p-4">
              <h5 className="fw-bold">Subject Based</h5>
              <p className="text-light-50">
                Select any subject and generate important and frequently asked questions.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card bg-secondary text-light border-0 shadow-lg h-100 p-4">
              <h5 className="fw-bold">AI Generated</h5>
              <p className="text-light-50">
                Questions are generated dynamically using powerful AI models.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card bg-secondary text-light border-0 shadow-lg h-100 p-4">
              <h5 className="fw-bold">Instant Results</h5>
              <p className="text-light-50">
                Get your score immediately and track your performance.
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Home;