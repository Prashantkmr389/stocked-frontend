
import './App.css'
import ReactDom from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoPage from './pages/NoPage'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path = 'login' element= {<Login/>}/>
            <Route path = 'signup' element = {<Signup/>}/>
            <Route path = '*' element={<NoPage/>}/>w
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
