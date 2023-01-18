import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Content from "./Page/Content";
import Signup from "./Page/Signup";
import Login from "./Page/Login";
import New from "./Page/New";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/" element={<Content/>} />
         <Route path="/signup" element={<Signup/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="/new" element={<New/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;