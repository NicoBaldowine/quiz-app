import React, { useState } from 'react';
import axios from 'axios';

const CreateQuizScreen = () => {
  // States for quiz title, topic, and generated questions
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(null); // To handle error state

  // Function to create quiz by calling OpenAI API
  const createQuiz = async () => {
    if (!topic || !title) {
      alert('Please provide both title and topic.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003', // OpenAI's text generation model
          prompt: `Generate 10 quiz questions about ${topic}, each with 4 answer choices, and identify the correct answer.`,
          max_tokens: 500,
          n: 1,
          stop: null,
          temperature: 0.5,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Correct use of environment variable
            'Content-Type': 'application/json',
          },
        }
      );

      // Process the OpenAI response and set the quiz questions
      const generatedText = response.data.choices[0].text;
      const questionsArray = generatedText
        .split('\n')
        .filter((q) => q.trim() !== ''); // Ensure non-empty questions
      setQuizQuestions(questionsArray);
    } catch (error) {
      console.error('Error generating quiz:', error.response ? error.response.data : error.message); // Log the exact error to console
      setError('Failed to generate quiz. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => window.history.back()}>Close</button>
      <h1>Create a Quiz</h1>

      {/* Input fields for the quiz title and topic */}
      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      {/* Button to create quiz */}
      <button onClick={createQuiz} disabled={loading}>
        {loading ? 'Generating Quiz...' : 'Create Quiz'}
      </button>

      {/* Error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display generated quiz questions */}
      {quizQuestions.length > 0 && (
        <div>
          <h2>Generated Quiz Questions</h2>
          <ul>
            {quizQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateQuizScreen;
