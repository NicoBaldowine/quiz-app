import React, { useState } from 'react';
import axios from 'axios';
import QuizScreen from './QuizScreen'; // Import the new screen

const CreateQuizScreen = () => {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createQuiz = async () => {
    if (!topic || !title) {
      alert('Please provide both title and topic.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `Generate a quiz question on the topic: ${topic}. Provide four answer choices and identify the correct one.`,
            },
          ],
          max_tokens: 200,
          n: 1,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Parse response
      const generatedText = response.data.choices[0].message.content;
      const lines = generatedText.split('\n').filter((line) => line.trim() !== '');

      const question = lines[0].replace('Question: ', '');
      const answers = [lines[1], lines[2], lines[3], lines[4]].map((line) =>
        line.replace(/^[A-D]\)\s*/, '')
      );
      const correctAnswer = lines[5].replace('Correct answer: ', '');

      // Set quiz data
      setQuizData({
        question,
        answers,
        correctAnswer,
      });
    } catch (error) {
      console.error('Error generating quiz:', error);
      setError('Failed to generate quiz. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => window.history.back()}>Close</button>
      <h1>Create a Quiz</h1>

      {!quizData && (
        <>
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
          <button onClick={createQuiz} disabled={loading}>
            {loading ? 'Generating Quiz...' : 'Create Quiz'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}

      {quizData && (
        <QuizScreen
          question={quizData.question}
          answers={quizData.answers}
          correctAnswer={quizData.correctAnswer}
        />
      )}
    </div>
  );
};

export default CreateQuizScreen;
