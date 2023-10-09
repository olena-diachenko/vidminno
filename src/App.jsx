import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
import { useSelector } from 'react-redux';
import HomePage from './pages/homePage';
import SignUp from './pages/auth/signUp';
import SignIn from './pages/auth/signIn';

function App() {
    const theme = useSelector(state => state.theme.theme);

    return (
        <CustomProvider theme={theme}>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/sign-in" element={<SignIn />}></Route>
            </Routes>
        </CustomProvider>
    );
}

export default App;
