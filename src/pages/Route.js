import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import ResetPasswordForm from './ResetPasswordForm';
import Congratulation from './Congratulation';
import Dissapointment from './Dissapointment';

const RoutesComponent = () => (
    <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/reset' element={<ResetPasswordForm />} />
        <Route path="/congratulations" element={<Congratulation />} />
        <Route path="/dissapointment" element={<Dissapointment />} />
    </Routes>
);

export default RoutesComponent;
