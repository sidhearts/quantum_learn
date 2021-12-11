import { Route, Routes } from "react-router";
import Home from "./component/home";
import NotFound from "./component/notFound";
import "./App.css";
import Header from "./component/navbar";
import Lesson1 from "./component/lessons/lesson1";
import OfflineApp from "./component/ticTacToe/tictac";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lesson-1' element={<Lesson1 />} />
        <Route path='/tictactoe' element={<OfflineApp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
