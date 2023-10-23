import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
import { useSelector } from 'react-redux';
import HomePage from './pages/homePage';
import SignUp from './pages/auth/signUp';
import SignIn from './pages/auth/signIn';
import JSHomeworks from './pages/js/jsHomeworks';
import JSLessons from './pages/js/jsLessons';
import ReactLessons from './pages/react/reactLessons';
import ReactHomeworks from './pages/react/reactHomeworks';

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
