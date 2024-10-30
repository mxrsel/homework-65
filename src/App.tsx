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
            <Route path='/pages/:pagesId' element={<Home />}/>
            <Route path='*' element={<p>Page Not found!</p>} />
        </Routes>
    </>
    )
};

export default App
