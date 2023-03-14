import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageTwo from './pages/PageTwo';
import './app.css';
import { useTheme } from './context/themeProvider';
const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route path='/' element={<Home />} />
          <Route path='pageTwo' element={<PageTwo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
