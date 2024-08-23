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
import ReactHomework from './pages/react/ReactHomework';
import TechnicalArticles from './pages/Articles/TechnicalArticles';
import NoMatch from './pages/NoMatch';
import TechnicalArticle from './pages/Articles/TechnicalArticle';

function App() {
  const theme = useSelector(state => state.theme.theme);

  return (
    <CustomProvider theme={theme}>
      <Routes>
        <Route path="vidminno" element={<HomePage />} />
        <Route path="vidminno/sign-up" element={<SignUp />} />
        <Route path="vidminno/sign-in" element={<SignIn />} />
        <Route path="vidminno/js-course/lessons" element={<JsLessons />} />
        <Route
          path="vidminno/js-course/lessons/:lessonId"
          element={<JsLesson />}
        />
        <Route path="vidminno/js-course/homeworks" element={<JSHomeworks />} />
        <Route
          path="vidminno/js-course/homeworks/:homeworkId"
          element={<JsHomework />}
        />
        <Route
          path="vidminno/react-course/lessons"
          element={<ReactLessons />}
        />
        <Route
          path="vidminno/react-course/lessons/:lessonId"
          element={<ReactLesson />}
        />
        <Route
          path="vidminno/react-course/homeworks"
          element={<ReactHomeworks />}
        />
        <Route
          path="vidminno/react-course/homeworks/:homeworkId"
          element={<ReactHomework />}
        />
        <Route
          path="vidminno/technical-articles/:articleCategory/:articleId"
          element={<TechnicalArticle />}
        />
        <Route
          path="vidminno/technical-articles/"
          element={<TechnicalArticles />}
        />
        <Route
          path="vidminno/technical-articles/:articleCategory"
          element={<TechnicalArticles />}
        />
        <Route path="vidminno/*" element={<NoMatch />} />
      </Routes>
    </CustomProvider>
  );
}

export default App;
