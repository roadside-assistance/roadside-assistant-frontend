import React from "react";
import {Redirect} from "react-router-dom";

// Layout Types
import {DefaultLayout} from "./layouts";

// Route Views
import UserProfileLite from "./views/UserProfileLite";
import Recriut from "./views/Recriut";
import Reports from "./views/Reports";
import CreateTeam from "./views/CreateTeam";
import EditTeam from "./views/EditTeam";
import dissolution from "./views/Dissolution";

export default [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => <Redirect to="/reports"/>
    },
    {
        path: "/user-profile-lite",
        layout: DefaultLayout,
        component: UserProfileLite
    },
    {
        path: "/recruit",
        layout: DefaultLayout,
        component: Recriut,
    }, {
        path: "/reports",
        layout: DefaultLayout,
        component: Reports,
    }, {
        path: "/create-team",
        layout: DefaultLayout,
        component: CreateTeam,
    }, {
        path: "/edit-team",
        layout: DefaultLayout,
        component: EditTeam,
    },
    {
        path: "/dissolution",
        layout: DefaultLayout,
        component: dissolution,
    }
];
