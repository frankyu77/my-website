import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blackjack from './routes/Blackjack';
import InsightUBC from './routes/InsightUBC';

const router = createBrowserRouter([
    {path : '/', element: <App />},
    {path : '/blackjack', element: <Blackjack />},
    {path : '/insightubc', element: <InsightUBC />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
