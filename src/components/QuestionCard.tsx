import React, { FC, MouseEvent } from "react";

//* types
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: MouseEvent<HTMLButtonElement>) => void; //string
  userAnswer: AnswerObject | undefined;
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
  return (
    <>
      <p className="number">
        Question: {questionNr} / {totalQuerstions}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionCard;
