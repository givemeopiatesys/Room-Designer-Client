import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {publicRoutes} from "./Routes/routes";


function AppRouter() {
    return (
        <Routes>
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact={true}/>
            )}
        </Routes>
    );
}

export default AppRouter;
