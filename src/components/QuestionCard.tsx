import React, { FC } from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any; //string
  questionNr: number;
  totalQuerstions: number;
};

const QuestionCard: FC<Props> = ({
  question,
  answers,
  userAnswer,
  callback,
  questionNr,
  totalQuerstions,
}) => {
  console.log(questionNr);
  return (
    <>
      <p className="number">
        Question: {question} / {totalQuerstions}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionCard;
