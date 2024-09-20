import React from 'react';

const HomeScreen = () => {
  return (
    <div>
      <h1>Available Quizzes</h1>
      {/* Buttons */}
      <button>Account</button>
      <button>Create a Quiz</button>

      {/* Quiz cards or empty state */}
      <p>No quizzes available yet.</p>
    </div>
  );
};

export default HomeScreen;
