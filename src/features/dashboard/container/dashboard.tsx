import React, { useState } from 'react';
import CreateGroupForm from '../component/createGroup';
import ExpenseForm from '../component/expenseForm';
import Expenses from '../component/expenses';

const Dashboard = () => {
	const [expenses, setExpenses] = useState<any>([]);

	const addExpenseHandler = (expenseData: any) => {
		console.log('expenseData', expenseData);
		const newExpense = {
			...expenseData,
			id: Math.random().toString()
		};

		setExpenses((prevExpenses: any) => [...prevExpenses, newExpense]);
	};
	return (
		<div className='dashboard-wrapper'>
			<div>
				<div className='button-wrapper'>
					<button className='add-btn expenses-btn'>ADD EXPENSES</button>
					<button className='add-btn settle-btn'>SETTLE UP</button>
				</div>
			</div>
			{/* <CreateGroupForm /> */}
			<div>
				<h1>Split-wise App</h1>
				<ExpenseForm onAddExpense={addExpenseHandler} />
				<Expenses expenses={expenses} />
			</div>
		</div>
	);
};

export default Dashboard;
