import Courses from "./components/Courses/Courses"
import Home from "./components/Home/Home"
import  { Routes,Route } from "react-router-dom"


function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>




      </Routes>
    </>
  )
}

export default App
