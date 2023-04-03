import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Main from './Layout/Main';
import Project3 from './Components/Projects/Project3';
import Project2 from './Components/Projects/Project2';
import Project1 from './Components/Projects/Project1';
import Contact from './Components/Home/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main/>,
      children:[
        {path:"/",element:<Home/>},
        {
          path: "project",
          element:<Projects/>,
        },
        {
          path: "about",
          element:<Home/>,
        },
        {
          path: "contact",
          element:<Contact/>,
        },
        {
          path: "project2",
          element:<Project2/>,
        },
        {
          path: "project3",
          element:<Project3/>,
        },
        {
          path: "project1",
          element:<Project1/>,
        },
      ]
    
    },
    
     
  
  ]);
  return (
    <div className="App">
       <RouterProvider router={router} />

    </div>
  );
}

export default App;
