import React from 'react';
import {Route} from 'react-router-dom';
import Income from './screens/Income';
import Expense from './screens/Expense';

const routes = [
    {
        path: '/',
        exact: true,
        component: Income
    },
    {
        path: '/income',
        component: Income
    },
    {
        path: '/expense',
        component: Expense
    }
];


const RouteWithSubRoutes = function (route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={
                props => (<route.component {...props} routes={route.routes}/>)
            } 
        ></Route>
    );
}

export default routes;
export {RouteWithSubRoutes};