import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import appStore from './utils/appStore'
import Browse from "./components/Browse";
import Login from "./components/Login";


const root = ReactDOM.createRoot(document.getElementById('root'));


 const appRouter = createBrowserRouter([
        {
          path : '/',
          element : <App/>,

          children : [
            {path : '/', element : <Login/>},
            {path : '/browse' , element : <Browse/>}
          ]
        }
    ])
root.render(
  <React.StrictMode>
   <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

