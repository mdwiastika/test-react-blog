import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="text-dark">
      <Routes>
        <Route index element={<Home title="Halaman Home" />}></Route>
        <Route path="blog">
          <Route index element={<Blog title="Halaman Blog" />}></Route>
          <Route path=":id_blog" element={<BlogDetail />}></Route>
        </Route>
        <Route path="about" element={<About title="Halaman About" />}></Route>
        <Route path="login" element={<Login title="Form Login" />}></Route>
        <Route path="register" element={<Register title="Form Register" />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
