import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import News from "./Components/News";
import Catalogue from "./Components/Catalogue";
import Contacts from "./Components/Contacts";
import Order from "./Components/Order";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<News/>}/>
        <Route path={'/catalogue'} element={<Catalogue/>}/>
        <Route path={"/contacts"} element={<Contacts/>}/>
        <Route path={"/order"} element={<Order/>}/>
      </Routes>
    </Router>
  );
}

export default App;
