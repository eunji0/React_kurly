import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Content from "./component/Content";
import Signup from "./component/Signup";
import Login from "./component/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/" element={<Content/>} />
         <Route path="/signup" element={<Signup/>}/>
         <Route path="login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;