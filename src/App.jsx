import React from 'react'
import Todos from './pages/Todos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {loader as todosLoader} from './pages/Todos';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Todos/>,
    loader: todosLoader
  }
])

const App = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default App;