import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Routing from "./routing/Routing";
import Sidebar from "./layouts/sidebar/Sidebar";
import Login from "./pages/Login/Login";
function App() {
  const [token, setToken] = useState();
  var loc;
  useEffect(() => {
    loc = localStorage.getItem("Token");
    setToken(JSON.parse(loc))
  })
  return (
    <div>
      {
        token ? <div className="App"> <Sidebar />
          <main className="gr--main-con--wrapper">
            <Header />
            <div className="content--wrapper">
              <Routing />
            </div>
            <Footer />
          </main> </div> : <div className=""> 
      
            <Login/>
          </div>
      }
    </div>

    // admin@gmail.com
    // admin@123
  );
}

export default App;
