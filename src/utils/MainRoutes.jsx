import { Routes, Route } from 'react-router-dom'
import CreateExperience from "../screens/CreateExperience";


const MainRoutes = () => {
    return (

        <Routes>
            <Route path='createexperience' element={<CreateExperience />} /> 
        </Routes>


    )
}
export default MainRoutes