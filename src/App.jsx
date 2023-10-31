import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import JSHomeworks from './pages/js/JsHomeworks';
import JSLessons from './pages/js/JsLessons';
import ReactLessons from './pages/react/ReactLessons';
import ReactHomeworks from './pages/react/ReactHomeworks';

function App() {
    const theme = useSelector(state => state.theme.theme);

    return (
        <CustomProvider theme={theme}>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/sign-in" element={<SignIn />}></Route>
                <Route
                    path="/js-course/lessons"
                    element={<JSLessons />}
                ></Route>
                <Route
                    path="/js-course/homeworks"
                    element={<JSHomeworks />}
                ></Route>
                <Route
                    path="/react-course/lessons"
                    element={<ReactLessons />}
                ></Route>
                <Route
                    path="/react-course/homeworks"
                    element={<ReactHomeworks />}
                ></Route>
            </Routes>
        </CustomProvider>
    );
}

export default App;
