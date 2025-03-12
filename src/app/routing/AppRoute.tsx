import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRoute from "./PublicRoute";
import App from "../../App";

const AppRoute = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>
                    <Route path="/*" element={<PublicRoute/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}

export {AppRoute};