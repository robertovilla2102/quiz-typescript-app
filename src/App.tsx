import React, { useState, VFC, MouseEvent } from "react";

//* function para ahcer el fetch
import { fetchQuizQestions } from "./API";

//* components
import QuestionCard from "./components/QuestionCard";

//* types
import { Difficulty, QuestionState } from "./API";

type AnswerObject = {
  question: string;
  answer: string;
  correct: string;
  correctAnswer: string;
};

const TOTAL_QUESTIONS: number = 10;

const App: VFC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]); // useState
  const [number, setNmumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTtrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuizQestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestion);
    setUserAnswers([]);
    setScore(0);
    setNmumber(0);

    setLoading(false);
  };

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users answer
    }
  };

  const nextQuestion = () => {};

  return (
    <div className="app">
      <h1>React QUIZ</h1>

      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
        <button className="start" onClick={startTtrivia}>
          Start
        </button>
      )}

      {!gameOver && <p className="score"> Score:</p>}

      {loading && <p>Loading Questions ...</p>}

      {!loading && !gameOver && (
        <QuestionCard
          totalQuerstions={TOTAL_QUESTIONS}
          questionNr={number + 1}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 && (
          <button onClick={nextQuestion}>Next Question</button>
        )}
    </div>
  );
};

export default App;
