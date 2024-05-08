import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFoundPage';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const RoutesWithNotFound: React.FC<Props> = ({ children }) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default RoutesWithNotFound;
