import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import Dashboard from 'features/dashboard/container/dashboard';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</Layout>
	);
};

export default App;
