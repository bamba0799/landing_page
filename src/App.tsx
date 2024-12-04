import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/Pages/Login";
import Dashboard from "../src/Pages/Dashboard";
import AuthProvider from "../src/contexts/AuthContext";
import PrivateRoute from "../src/router/PrivateRoutes";
import Home from "./Pages/Home";
import AddCommission from "./Pages/Commission/addCommission";
import IndexPageComiteOrganisation from "./Pages/ComiteOrganisation/IndexPage";
import IndexPageSeminariste from "./Pages/Seminariste/IndexPage";
import IndexPageDortoir from "./Pages/Dortoir/IndexPage";

function App() {
  console.log("App");
  
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute  />}>
              <Route path="/home" element={<Home />} />
              <Route path="/add-commission" element={<AddCommission />} />
              <Route path="/comite-organisation" element={<IndexPageComiteOrganisation />} />
              <Route path="/seminariste" element={<IndexPageSeminariste />} />
              <Route path="/dortoir" element={<IndexPageDortoir />} />
            </Route>
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;