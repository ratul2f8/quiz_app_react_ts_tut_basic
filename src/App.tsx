import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard.component";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.HARD
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const nextQuestion = () => {
    //move on to the next question if not the last
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const TOTAL_QUESTIONS: number = 10;

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    //get the user answer
    const answer = e.currentTarget.value;
    //get the correct answer and set the score
    const correct = questions[number].correct_answer === answer;
    //correct && setScore(score + 1);
    if (correct) {
      setScore((prev) => prev + 1);
    }
    //Save question with the correct answer
    const answerObject = {
      question: questions[number].question,
      correctAnswer: questions[number].correct_answer,
      answer,
      correct,
    };
    setUserAnswers((prev) => [...prev, answerObject]);
  };

  return (
    <>
      <GlobalStyle/>
      <Wrapper className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver && <p className="score">Score: {score}</p>}
      {loading && <p>Loading Questions ...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          totalQuestions={TOTAL_QUESTIONS}
          questionNr={number + 1}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
          answers={questions[number].answers}
          question={questions[number].question}
        />
      )}
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 && (
          <button className="next" onClick={nextQuestion}>
            Next &#10095;
          </button>
        )}
    </Wrapper>
    </>
  );
}

export default App;
