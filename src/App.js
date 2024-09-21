import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'; // Import NextUIProvider
import HomeScreen from './screens/HomeScreen';
import CreateQuizScreen from './screens/CreateQuizScreen';

function App() {
  return (
    <NextUIProvider> {/* Wrap your app with NextUIProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create" element={<CreateQuizScreen />} />
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
