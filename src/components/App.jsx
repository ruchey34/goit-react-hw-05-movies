import CastPage from 'pages/CastPage';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import OneFilmPage from 'pages/OneFilmPage';
import ReviewsPage from 'pages/ReviewsPage';
import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner';

import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Layout from './Layout';

export const App = () => {
  return (
    <>
      <Suspense fallback={<Oval />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<Outlet />}>
              <Route index element={<MoviesPage />} />
              <Route path="/movies/:movieId" element={<OneFilmPage />}>
                <Route path="cast" element={<CastPage />} />
                <Route path="reviews" element={<ReviewsPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};