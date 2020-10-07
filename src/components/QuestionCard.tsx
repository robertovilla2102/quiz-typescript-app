import React, { FC, MouseEvent } from "react";
import styled from "styled-components";

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
  callback,
  question,
  answers,
  userAnswer,
  questionNr,
  totalQuerstions,
}) => {
  return (
    <>
      <p className="number">
        Question: {questionNr} / {totalQuerstions}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />
      <QuestionContainer>
        {answers.map((answer) => (
          <div key={answer}>
            <Question disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </Question>
          </div>
        ))}
      </QuestionContainer>
    </>
  );
};

export default QuestionCard;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 24px;
`;

export const Question = styled.button`
  margin: 0 12px;
  padding: 12px;
  width: 250px;
  height: 65px;
`;
