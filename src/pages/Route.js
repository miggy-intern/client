import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TutorialPage from './TutorialPage'

const RoutesComponent = () => (
    <Routes>
        <Route path='/' element={<TutorialPage />} />
    </Routes>
);

export default RoutesComponent;
