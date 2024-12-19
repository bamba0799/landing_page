import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/Pages/Login";
import AuthProvider from "../src/contexts/AuthContext";
import PrivateRoute from "../src/router/PrivateRoutes";
import Home from "./Pages/Home";
import AddCommission from "./Pages/Commission/addCommission";
import IndexPageComiteOrganisation from "./Pages/ComiteOrganisation/IndexPage";
import IndexPageSeminariste from "./Pages/Seminariste/IndexPage";
import IndexPageDortoir from "./Pages/Dortoir/IndexPage";
import AddSeminariste from "./Pages/Seminariste/addSeminariste";
import AddNiveau from "./Pages/Niveau/addNiveau";
import UpdateSeminariste from "./Pages/Seminariste/updateSeminariste";
import AddDortoir from "./Pages/Dortoir/AddDortoir";
import IndexPageVisiteur from "./Pages/Visiteur/IndexPage";
import AddVisiteur from "./Pages/Visiteur/AddVisiteur";
import UpdateVisiteur from "./Pages/Visiteur/UpdateVisiteur";
import UpdatePco from "./Pages/ComiteOrganisation/UpdatePco";
import IndexPageMateriel  from './Pages/Materiel/IndexPage';

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
              <Route path="/update-pco/:pcoId" element={<UpdatePco />} />
              <Route path="/seminariste" element={<IndexPageSeminariste />} />
              <Route path="/add-seminariste" element={<AddSeminariste />} />
              <Route path="/update-seminariste/:seminaristeId" element={<UpdateSeminariste />} />
              <Route path="/add-niveau" element={<AddNiveau />} />
              {/* visiteur */}
              <Route path="/visiteur" element={<IndexPageVisiteur />} />
              <Route path="/add-visiteur" element={<AddVisiteur />} />
              <Route path="/update-visiteur/:visiteurId" element={<UpdateVisiteur />} />

              {/* dortoir */}
              <Route path="/dortoir" element={<IndexPageDortoir />} />
              <Route path="/add-dortoir" element={<AddDortoir />} />

              {/* materiel */}
               <Route path="/materiel" element={< IndexPageMateriel/>} />
            </Route>
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;