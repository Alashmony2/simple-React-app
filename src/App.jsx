import Head from './components/head/head';
import "./App.css"
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';

function App() {

  const router = createBrowserRouter([
    {path:'', element:<Layout/>,children:[
      {index:true,element:<Head/>},
      {path:'head',element:<Head/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
    ]},
  ])
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
