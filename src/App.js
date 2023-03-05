import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Header from './partials/Header';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Footer from './partials/Footer';
import Login from './Login';
import Register from './Register';
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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
