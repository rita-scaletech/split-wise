import { useState } from 'react';
import ExpenseForm from '../component/expenseForm';
import Expenses from '../component/expenses';
import CustomModal from 'shared/modal/modal';

const Dashboard = () => {
	const [isExpenses, setIsExpenses] = useState(false);

	return (
		<div className='dashboard-wrapper'>
			{/* <CreateGroupForm /> */}
			<div className='width--50'>
				<div className='button-wrapper'>
					<button className='add-btn expenses-btn' onClick={() => setIsExpenses(true)}>
						ADD EXPENSE
					</button>
					<button className='add-btn settle-btn'>SETTLE UP</button>
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
