import Toolbar from "./containers/Toolbar/Toolbar";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";


const App = () => {


    return (
    <>
        <header>
        <Toolbar />
        </header>

        <Routes>
            <Route path='/pages/home' element={<Home />} />
        </Routes>
    </>
    )
};

export default App
