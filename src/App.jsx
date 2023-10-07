import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";

function App() {

    return (
        <Routes>
            <Route path='/sign-up' element={<SignUp />}></Route>
            <Route path='/sign-in' element={<SignIn />}></Route>
        </Routes>
    );
}

export default App;