import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateExperience from "../screens/CreateExperience";

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/createexperience' element={<CreateExperience />} />
            </Routes>
        </BrowserRouter>


    )
}

export default MainRoutes