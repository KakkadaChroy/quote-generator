import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {loadFavoritesFromDB} from "./_quote-generator/assets/ts/laodFavoritesFromDB";
import {useAppDispatch} from "./app/redux/hooks/reduxHook";

function App() {
  const dispatch = useAppDispatch();

  // load data from indexDB for client-side
  useEffect(() => {
    loadFavoritesFromDB(dispatch);
  }, [dispatch]);


  return <Outlet/>
}

export default App;
