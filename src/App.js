import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Header from './partials/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Footer from './partials/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="text-dark">
      <Header></Header>
      <Routes>
        <Route index element={<Home title="Halaman Home" />}></Route>
        <Route path="blog" element={<Blog title="Halaman Blog" />}></Route>
        <Route path="about" element={<About title="Halaman About" />}></Route>
        <Route path="login" element={<Login title="Form Login" />}></Route>
        <Route path="register" element={<Register title="Form Register" />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
