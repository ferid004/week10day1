import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Galery from './Galery';
import About from './About';
import Language from './Language';
import Shortcode from './Shortcode';
import Login from './Login';
import Layout from './Layout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/galery' element={<Galery />}></Route>
          <Route path='/shortcode' element={<Shortcode />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/language' element={<Language />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
