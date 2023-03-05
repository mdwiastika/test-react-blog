import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Header from './partials/Header';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Footer from './partials/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home title="Halaman Home" />}></Route>
        <Route path="blog" element={<Blog title="Halaman Blog" />}></Route>
        <Route path="about" element={<About title="Halaman About" />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
