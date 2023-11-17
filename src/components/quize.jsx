import { Fragment, useContext, useState } from "react";
import { subject as subjectProvider } from "../context/subjectProvider";
import Questions from "./UI/question";
import Answers from "./UI/answers";
import Score from "./score";

export default function Quize() {
  const subject = useContext(subjectProvider);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const subjectQuestionsLength = subject.questions.length;
  let content;
  if (currentQuestion <= subjectQuestionsLength - 1) {
    content = (
      <Fragment>
        <Questions subject={subject} currentQuestion={currentQuestion} />
        <Answers
          key={subject.questions[currentQuestion].question}
          subject={subject}
          currentQuestion={currentQuestion}
          handleCurrentQuestion={setCurrentQuestion}
          handleScore={setScore}
          currentScore={score}
        />
      </Fragment>
    );
  } else {
    content = (
      <Score
        questionsLength={subjectQuestionsLength}
        score={score}
        subject={subject}
      />
    );
  }
  console.log(subject.questions);
  return <div className="lg:flex justify-between">{content}</div>;
}
