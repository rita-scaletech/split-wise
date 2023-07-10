import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'hoc/layout/layout';
import Dashboard from 'features/dashboard/container/dashboard';
import SettleUpList from 'features/settleUpList/container/settleUpList';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/settle-list' element={<SettleUpList />} />

				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</Layout>
	);
};

export default App;
