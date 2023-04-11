import { lazy } from "react";
import {Routes, Route} from "react-router-dom";
import Stateupdate from "./component/Stateupdate";
import MyForm from "./component/Form";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
// const Contact = lazy(() => import("./component/Contact"));

function App() {
  return (
    <>
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/form" element={ <MyForm header= "This is Prop header"/> } />
      <Route path="/stateUpdate" element={ <Stateupdate /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
    </>
  );
}

export default App;
