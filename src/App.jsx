import { Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing/Landing"

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </>
  )
}

export default App
