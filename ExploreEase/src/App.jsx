import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
import { Routes, Route } from "react-router-dom";
import Help from "./components/help/Help";
import AboutUs from "./components/about/AboutUs";
import Details from "./components/service/Details";
import Book from "./components/service/Book";
import Protected from "./components/profile/Protected";
import { useContext, useState } from "react";
import Login from "./components/profile/Login";
import Register from "./components/profile/Register";
import Success from "./components/service/Success";
import MainStore,{Contextapi} from "./components/store/Context"

function App() {
  return (
      <div>
        <MainStore>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route
            path="/aboutUs"
            element={
              <Protected>
                <AboutUs />
              </Protected>
            }
          />
          <Route
            path="/service"
            element={
              <Protected>
                <Service />
              </Protected>
            }
          />
          <Route
            path="/details/:tid"
            element={
              <Protected>
                <Details />
              </Protected>
            }
          />
          <Route
            path="/help"
            element={
              <Protected>
                <Help />
              </Protected>
            }
          />
          <Route
            path="/booking/:bid"
            element={
              <Protected>
                <Book />
              </Protected>
            }
          />
           <Route
            path="/success"
            element={
              <Protected>
                <Success/>
              </Protected>
            }
          />
          {/* <Route path='/profile' element={<Profile/>} /> */}
        </Routes>
        </MainStore>
      </div>
  );
}

export default App;
