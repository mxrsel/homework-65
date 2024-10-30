import Toolbar from "./containers/Toolbar/Toolbar";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import About from "./containers/About/About.tsx";

const App = () => {

    return (
    <>
        <header>
        <Toolbar />
        </header>

        <Routes>
            <Route path='/pages/home' element={<Home />} />
            <Route path='/pages/about' element={<About />}/>
        </Routes>
    </>
    )
};

export default App
