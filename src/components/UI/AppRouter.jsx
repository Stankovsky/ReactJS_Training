import React from "react";
import { useContext } from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { AuthContext } from "../../context";
import { privateRoutes } from "../../router";
import { publicRoutes } from "../../router";
import Loader from "./Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path}
                    />
                )}
                <Route
                        path="*"
                        element={<Navigate to="/posts" replace />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => 
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path}
                    />
                )}
                <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                />
            </Routes>
        
    );
};

export default AppRouter;