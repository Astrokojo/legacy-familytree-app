import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FamilyForm from "./components/FamilyForm";
import FamilyTree from "./components/FamilyTree";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import FamilyDetails from "./components/FamilyDetails";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <FamilyForm />
            <FamilyDetails />
            <FamilyTree />
          </Route>
        </Switch>


      </Router>
      <Footer />
    </div>
  );
}

export default App;
