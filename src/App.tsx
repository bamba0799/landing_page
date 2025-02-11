import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "../src/contexts/AuthContext";
import PrivateRoute from "../src/router/PrivateRoutes";
import Home from "./Pages/Home";

function App() { 
  console.log("App");
  
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute  />}>
              <Route path="/home" element={<Home />} />

            </Route>
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;