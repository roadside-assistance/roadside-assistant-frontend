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
import SomeForm from "./views/RecriutStateManager";
import RecriutStateManager from "./views/RecriutStateManager";
import Reports from "./views/Reports";
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
        path: "/recruit-country-manager",
        layout: DefaultLayout,
        component: RecriutStateManager,
    }, {
        path: "/reports",
        layout: DefaultLayout,
        component: Reports,
    },
    {
        path: "/dissolution",
        layout: DefaultLayout,
        component: dissolution,
    }
];
