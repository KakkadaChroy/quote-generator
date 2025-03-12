import {Navigate, Route, Routes} from "react-router-dom";
import MasterLayout from "../../_quote-generator/layout/MasterLayout";
import QuoteWrapper from "../modules/quote/QuoteWrapper";

const PublicRoute = () => {
    return <>
        <Routes>
            <Route element={<MasterLayout/>}>
                {/*Route*/}
                <Route path="/home/*" element={<QuoteWrapper/>}/>


                {/*Index and replace route*/}
                <Route index path="/home" element={<QuoteWrapper/>}/>
                <Route path="*" element={<Navigate to="/home" replace/>}/>
            </Route>
        </Routes>
    </>
}

export default PublicRoute;