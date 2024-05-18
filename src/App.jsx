
import './App.css'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Signup from './pages/Signup'


function App() {
  

  return (
    <RouterProvider router={appRouter}></RouterProvider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/logout',
    element:<Signup/>
  },
  {
    path:'/recenttrades',
    element:<Signup/>
  }

])

export default App
