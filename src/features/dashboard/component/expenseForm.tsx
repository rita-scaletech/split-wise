import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }: any) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');

	const handleSubmit = (event: any) => {
		event.preventDefault();

		const expenseData = {
			title: title,
			amount: +amount
		};

		onAddExpense(expenseData);
		setTitle('');
		setAmount('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Title</label>
				<input
					placeholder='Title'
					type='text'
					value={title}
					onChange={(event: any) => setTitle(event.target.value)}
				/>
			</div>
			<div>
				<label>Amount</label>
				<input
					placeholder='Amount'
					type='number'
					value={amount}
					onChange={(event: any) => setAmount(event.target.value)}
				/>
			</div>
			<button type='submit'>Add Expense</button>
		</form>
	);
};

export default ExpenseForm;
