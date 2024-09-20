import React, { useState } from 'react';

const QuizScreen = ({ question, answers, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Handle answer selection
  const handleSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
      <h1>Generated Quiz Question</h1>
      <div>
        <p><strong>Question:</strong> {question}</p>
        <ul>
          {answers.map((answer, index) => (
            <li
              key={index}
              onClick={() => handleSelect(answer)}
              style={{
                backgroundColor: selectedAnswer === answer ? '#ccc' : 'white',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '5px',
                margin: '10px 0',
                border: '1px solid #ddd'
              }}
            >
              {answer}
            </li>
          ))}
        </ul>
      </div>
      <button
        disabled={!selectedAnswer}
        onClick={() => {
          alert(`You selected: ${selectedAnswer}\nCorrect answer: ${correctAnswer}`);
          // Implement further logic here, e.g., move to the next question or submit the result.
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default QuizScreen;
