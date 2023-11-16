import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import JSHomeworks from './pages/js/JsHomeworks';
import JsLessons from './pages/js/JsLessons';
import JsLesson from './pages/js/JsLesson';
import ReactLessons from './pages/react/ReactLessons';
import ReactHomeworks from './pages/react/ReactHomeworks';
import ReactLesson from './pages/react/ReactLesson';
import JsHomework from './pages/js/JsHomework';

function App() {
    const theme = useSelector(state => state.theme.theme);

    return (
        <CustomProvider theme={theme}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/js-course/lessons" element={<JsLessons />} />
                <Route
                    path="/js-course/lessons/:lessonId"
                    element={<JsLesson />}
                />
                <Route path="/js-course/homeworks" element={<JSHomeworks />} />
                <Route
                    path="/js-course/homeworks/:homeworkId"
                    element={<JsHomework />}
                />
                <Route
                    path="/react-course/lessons"
                    element={<ReactLessons />}
                />
                <Route
                    path="/react-course/lessons/:lessonId"
                    element={<ReactLesson />}
                />
                <Route
                    path="/react-course/homeworks"
                    element={<ReactHomeworks />}
                />
                <Route
                    path="*"
                    element={
                        <main>
                            <p>There is nothing here</p>
                        </main>
                    }
                />
            </Routes>
        </CustomProvider>
    );
}

export default App;
