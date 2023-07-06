const Expenses = ({ expenses }: any) => {
	return (
		<div>
			<h2>Expenses</h2>
			<ul>
				{expenses.map((expense: any) => (
					<li key={expense.id}>
						{expense.title} - ${expense.amount}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Expenses;
