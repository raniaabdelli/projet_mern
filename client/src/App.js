import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Contact from "../src/pages/Contact";
import Panier from "../src/pages/Panier";
import Catégories from "../src/pages/Catégories";
import Accueil from "./pages/Accueil";
//import PersonList from "./components/PersonList";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getPerson } from "./components/redux/actions/personAction";
import NavBar from "./components/NavBar";
import AddPerson from "./components/AddPerson";
import Footer from "./pages/Footer";
import Blog from "./pages/Blog";
import Connexion from "./pages/Connexion";
import Qsn from "./pages/Qsn";
function App() {
 
  const persons = useSelector((state) => state.personReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerson());
  }, []);
  console.log(getPerson());
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          'url("https://cdn.outsideonline.com/wp-content/uploads/2021/06/15/camping_fun_s.jpg")',
        backgroundSize: "cover",
        width: "100%",
        // height: '150vh';
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        top: '0'

      }}
    ><NavBar/>
      <Routes>
        <Route path="/add" element={<AddPerson />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/Catégories" element={<Catégories />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AddPerson" element={<AddPerson />} />        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Qsn" element={<Qsn/>} />


      </Routes>
      
      <Blog  />
      <Catégories />
      <Footer />
    </div>
  );
}
//<Route path="/" element={<PersonList persons={persons} />}></Route>

export default App;
//background-color: beige !important;
