import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomModal from 'shared/modal/modal';
import ExpenseForm from '../component/expenseForm';
import Expenses from '../component/expenses';

const Dashboard: FC = () => {
	const navigate = useNavigate();
	const [isExpenses, setIsExpenses] = useState(false);

	return (
		<div className='dashboard-wrapper'>
			<div className=''>
				<div className='button-wrapper'>
					<button className='add-btn expenses-btn' onClick={() => setIsExpenses(true)}>
						ADD EXPENSE
					</button>
					<button onClick={() => navigate('/settle-list')} className='add-btn settle-btn'>
						SETTLE LIST
					</button>
				</div>
				<Expenses />

				{isExpenses && (
					<CustomModal
						show={true}
						handleClose={() => setIsExpenses(false)}
						className='add-expenses-model-wrapper'
					>
						<div>
							<h3 className='text--center mb--20'> 🧾 Add Expense</h3>
							<ExpenseForm handleClose={() => setIsExpenses(false)} />
						</div>
					</CustomModal>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
