import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";
import Stateupdate from "./component/Stateupdate";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

//Lazy loaded Code Splitting
const MyForm = lazy(() => import("./component/Form"));
const Contact = lazy(() => import("./component/Contact"));

function App() {
  return (
    <>
  <Suspense fallback ={<h1>Loading....</h1>}>
       <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/form" element={ <MyForm header= "This is Prop header"/> } />
      <Route path="/stateUpdate" element={ <Stateupdate /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
  </Suspense>
    </>
  );
}

export default App;
