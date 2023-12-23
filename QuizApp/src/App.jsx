import Home from './components/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Quiz from './components/Quiz';
import Result from "./components/Result"

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
  
}

export default App
