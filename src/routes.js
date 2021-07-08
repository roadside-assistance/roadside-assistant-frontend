import React from "react";
import {Redirect} from "react-router-dom";

// Layout Types
import {DefaultLayout} from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Recriut from "./views/Recriut";
import Reports from "./views/Reports";
import RecriutComp from "./views/RecriutComp";
import CreateTeam from "./views/CreateTeam";
import EditTeam from "./views/EditTeam";
import dissolution from "./views/Dissolution";

export default [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => <Redirect to="/blog-overview"/>
    },
    {
        path: "/blog-overview",
        layout: DefaultLayout,
        component: BlogOverview
    },
    {
        path: "/user-profile-lite",
        layout: DefaultLayout,
        component: UserProfileLite
    },
    {
        path: "/add-new-post",
        layout: DefaultLayout,
        component: AddNewPost
    },
    {
        path: "/errors",
        layout: DefaultLayout,
        component: Errors
    },
    {
        path: "/components-overview",
        layout: DefaultLayout,
        component: ComponentsOverview
    },
    {
        path: "/tables",
        layout: DefaultLayout,
        component: Tables
    },
    {
        path: "/blog-posts",
        layout: DefaultLayout,
        component: BlogPosts
    },
    {
        path: "/recruit",
        layout: DefaultLayout,
        component: Recriut,
    },{
        path: "/recruit-comp",
        layout: DefaultLayout,
        component: RecriutComp,
    }, {
        path: "/reports",
        layout: DefaultLayout,
        component: Reports,
    }, {
        path: "/create-team",
        layout: DefaultLayout,
        component: CreateTeam,
    } ,{
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
