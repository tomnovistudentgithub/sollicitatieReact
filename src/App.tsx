import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Welkomstbericht from "./pages/Welkomstbericht";
import NavBar from "./component/NavBar";
import { useState, useEffect } from 'react';
import loadState from "./helpers/loadState";
import saveState from "./helpers/saveState";
import Werkervaring from "./pages/Werkervaring";
import Footer from "./component/Footer";
import About from "./pages/About";
import Opleiding from "./pages/Opleiding";
import Motivatie from "./pages/Motivatie";
import WarningContext from "./context/WarningContext";
function App() {
    const [name, setName] = useState(loadState('name', ''));
    const [showWarning, setShowWarning] = useState(true);
    useEffect(() => {
        saveState('name', name);
    }, [name]);

    return (

        <Router>
            <WarningContext.Provider value={{ showWarning, setShowWarning }}>
                <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Homepage name={name} setName={setName} />} />
                <Route path="/welkomstbericht" element={<Welkomstbericht name={name} />} />
                <Route path="/werkervaring" element={<Werkervaring />} />
                <Route path="/opleidingen" element={<Opleiding />} />
                <Route path="/motivatie" element={<Motivatie />} />
                <Route path="/about" element={<About />} />
                <Route path={"*"} element={<h1>Sorry deze pagina bestaat niet</h1>} />


            </Routes>
            <Footer />
</>
            </WarningContext.Provider>
        </Router>
    );
}

export default App;