import Toolbar from "./containers/Toolbar/Toolbar";
import { Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import EditPage from "./components/EditPage/EditPage.tsx";

const App = () => {

    return (
    <>
        <header>
        <Toolbar />
        </header>

        <Routes>
            <Route path='/pages' element={<Home />} />
            <Route path='/pages/:pagesId' element={<Home />}/>
            <Route path='/pages/edit-pages/:id' element={<EditPage />} />
            <Route path='*' element={<p>Page Not found!</p>} />
        </Routes>
    </>
    )
};

export default App
