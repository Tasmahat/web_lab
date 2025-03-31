import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import News from "./Components/News";
import Catalogue from "./Components/Catalogue";
import Contacts from "./Components/Contacts";
import Order from "./Components/Order";
import CreateProduct from "./Components/CreateProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<News/>}/>
        <Route path={'/catalogue'} element={<Catalogue/>}/>
        <Route path={"/contacts"} element={<Contacts/>}/>
        <Route path={"/order"} element={<Order/>}/>
        <Route path={"/create_product"} element={<CreateProduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;
