import React from "react";
import { AuthRoute } from "./AuthRoute";
import Error404Page from "../pages/errorPages/Error404Page";
import AccessDenied403Page from "../pages/errorPages/AccessDenied403Page";
import ProtectedRoute from "../utils/Auth";
import { ProtectedRoutes } from "./ProtectedRoutes";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

export const AppRoute = [
  {
    path: "/",
    element: < AuthLayout/>,
    children: [
      ...AuthRoute,
      {
        path: "/",
        element: <ProtectedRoute><MainLayout/> </ProtectedRoute>,
        children: [
            ...ProtectedRoutes
        ]
      },
      {
        path: "not-found",
        element: <Error404Page />,
      },
      {
        path: '403',
        element: <AccessDenied403Page />,
      },
    ],
  },
];
