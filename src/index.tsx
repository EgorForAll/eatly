import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "@/components/pages/main/main-page";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/footer";
import BlogPage from "@/components/pages/blog/blog-page";
import NotFound from "@/components/pages/not-found/not-found";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: 'blog',
        element: <BlogPage />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <div className='app'>
          <Header />
          <RouterProvider router={router} />
          <Footer />
      </div>
  </React.StrictMode>
);

