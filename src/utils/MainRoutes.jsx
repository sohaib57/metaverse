import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CreateExperience from "../screens/CreateExperience";

const MainRoutes = () => {
    return (

        <Routes>
            <Route path='/createexperience' element={<CreateExperience />} >
            </Route>

        </Routes>


    )
}

export default MainRoutes