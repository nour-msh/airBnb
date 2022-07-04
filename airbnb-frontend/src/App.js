import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from './Component/NavBar';
import CategoriesBar from './Component/CategoriesBar';
import AdminPanel  from './pages/Admin';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <hr/>
      <CategoriesBar/>
      <Router>
        <Routes>
          <Route exact path="/admin" element={<AdminPanel />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
