import LandingPageComponentPage from "../pages/LandingPageComponentPage";
import {Route, Routes} from "react-router-dom";

const Approute = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPageComponentPage/>}/>
        </Routes>
    )
}
export default Approute;

