import React from 'react';
import {useRoutes} from 'react-router-dom';
import {RoutesConfig} from '@modules/routes.tsx';

const TabletuneRouter: React.FC = () => {
    return useRoutes(RoutesConfig);
};


export default TabletuneRouter;
