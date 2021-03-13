import React, { Suspense, useState } from 'react'
import { Route } from "react-router-dom";
import ErrrorBoundary from './ErrorBoundary'

let RouteWithSubRoutes = (route) => {


    /**
        Conditional Routing based on if the serving route is authed and which role(user) can access that route
     **/


    //============== Setting dummy conditions here which can be action based ============//  

    const isAllowed = false ;
    const role = 'public' ;


    //===================================================================================//

    if (isAllowed == route.authEntry && route.roleEntry.includes(role)) {

        /** 
            * If route paramter matches the condition
        **/

        return (
            <>
                    <ErrrorBoundary>
                        <Route
                            path={route.path}
                            render={props => (
                                <>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <route.component {...props} routes={route.routes} />
                                    </Suspense>
                                </>
                            )}
                        />
                    </ErrrorBoundary>
            </>
        )
    }
    else {
        /** 
         Redirection based on auth status if no matching route foun
         **/
    }
}


export default RouteWithSubRoutes