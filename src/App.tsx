import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "../src/contexts/AuthContext";
import PrivateRoute from "../src/router/PrivateRoutes";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";

function App() { 
  console.log("App");
  
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route element={<PrivateRoute  />}> */}
              <Route path="/home" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />

            {/* </Route> */}
            {/* Other routes */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;