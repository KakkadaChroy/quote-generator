import React, {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import MasterLayout from "../../_quote-generator/layout/MasterLayout";
import Favorites from "../modules/favorites/components/Favorites";
import ErrorPages from "../../_quote-generator/helpers/components/error/ErrorPages";
import LoadingPage from "../../_quote-generator/helpers/ui/LoadingPage";


// Lazy route
const QuoteWrapper = lazy(() => import("../modules/quote/QuoteWrapper"));


const PublicRoute = () => {
    return <>
        <Suspense fallback={<LoadingPage/>}>
            <Routes>
                <Route element={<MasterLayout/>}>
                    {/*Route*/}
                    <Route path="/home" element={<QuoteWrapper/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>

                    {/*error route*/}
                    <Route path="/error" element={<ErrorPages/>}/>

                    {/*Index and replace route*/}
                    <Route index path="/home" element={<QuoteWrapper/>}/>
                    <Route path="*" element={<Navigate to="/home" replace/>}/>
                </Route>
            </Routes>
        </Suspense>
    </>
}


export default PublicRoute;