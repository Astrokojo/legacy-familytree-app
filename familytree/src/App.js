import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import FamilyTree from "./components/FamilyTree";

import { BrowserRouter as Router } from "react-router-dom";
import FamilyForm from "./components/FamilyForm";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        {/* <Hero /> */}

        <FamilyForm/>
        <FamilyTree />
      </Router>

    </div>
  );
}

export default App;
