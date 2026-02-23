import axios from "axios";
import { Await, useLoaderData } from "react-router";
import SavedQuizs from "../components/SavedQuizs";
import { Suspense } from "react";

const GetSavedQuizs = () => {
  const { quizs } = useLoaderData();

  return (
    <Suspense
      fallback={
        <div className="vw-100 vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
          <span
            className="spinner-border spinner-border-sm text-light"
            role="status"
          ></span>
        </div>
      }
    >
      <Await resolve={quizs}>
        {(isQuizsLoad) => <SavedQuizs quizs={isQuizsLoad} />}
      </Await>
    </Suspense>
  );
};

export default GetSavedQuizs;

const quizs = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/quizs/saved`,
    );

    // console.log(response)

    return response.data?.quizs;
  } catch (error) {
    console.log(error);
  }
};

export const loader = async () => {
  return {
    quizs: quizs(),
  };
};
