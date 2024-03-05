import logo from './logo.svg';
import './App.css';
import Header from './components/functionComponents/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Counter } from './features/counter/counter';
import User from './features/users/user';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Counter/>
        <User/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
