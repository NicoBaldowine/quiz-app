import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CreateQuizScreen from './screens/CreateQuizScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create" element={<CreateQuizScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
