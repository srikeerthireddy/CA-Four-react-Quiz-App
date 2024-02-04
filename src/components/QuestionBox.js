import React, { useState } from 'react';
import Result from './Result';

const QuestionBox = (props) => {
  const [correctQue, setCorrectQue] = useState(0);
  const [queNo, setQueNo] = useState(0);
  const [highlight, setHighlight] = useState(false);

  const CheckAnswer = (id) => {
    if (props.Questions[queNo].options[id].isCorrect) {
      setCorrectQue((prevCorrectQue) => prevCorrectQue + 1);
    }
    setQueNo((prevQueNo) => prevQueNo + 1);
  };

  const HighlightText = {
    color: highlight ? "red" : "white",
  };

  const Highlight = () => {
    setHighlight((prevHighlight) => !prevHighlight);
  };

  if (queNo < 5) {
    return (
      <div className="QuestionBox">
        <div className="questionBox">
          <h3>
            Question <span>{queNo + 1}</span> out of 5
          </h3>
          <h1 className="question" style={HighlightText}>
            {props.Questions[queNo].text}
          </h1>
          <div className="Options-box">
            {props.Questions[queNo].options.map((option, index) => (
              <button
                key={index}
                className="Option-button"
                onClick={() => CheckAnswer(index)}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div className="highlightButtons">
            <button onClick={Highlight}>Highlight</button>
            <button onClick={() => setHighlight(false)}>Remove highlight</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Result Result={correctQue} />;
  }
};

export default QuestionBox;

