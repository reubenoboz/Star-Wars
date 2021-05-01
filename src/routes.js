import React from 'react';
import { Redirect } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'))
const Characters = lazy(() => import('./pages/Characters'))
const Ships = lazy(() => import('./pages/Ships'))
const Planets = lazy(() => import('./pages/Planets'))
const Details = lazy(() => import('./pages/Details'))

const routes = [
    {
        title: 'Home',
        path: '/',
        exact: true,
        component: Home
    },
    {
        title: 'Characters',
        path: '/characters',
        exact: true,
        component: Characters
    },
    {
        title: 'Ships',
        path: '/ships',
        exact: true,
        component: Ships
    },
    {
        title: 'Planets',
        path: '/planets',
        exact: true,
        component: Planets
    },
    {
        title: 'Details',
        path: '/details/:id',
        exact: true,
        component: Details
    },
    {
        title: 'Home',
        path: '/home',
        exact: true,
        component: () => <Redirect to="/" />
      },
]

export default routes;