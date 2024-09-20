import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomeScreen = () => {
  return (
    <div>
      <h1>Available Quizzes</h1>
      {/* Navigation buttons */}
      <Link to="/account">
        <button>Account</button>
      </Link>
      <Link to="/create">
        <button>Create a Quiz</button>
      </Link>

      {/* Quiz cards or empty state */}
      <p>No quizzes available yet.</p>
    </div>
  );
};

export default HomeScreen;
