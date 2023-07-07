import { formatDate } from 'shared/util/utility';
import { IValuesProps } from '../interface/dashboard';

import walletImg from 'assets/images/wallet.png';

const Expenses = () => {
	const expensesDataString = localStorage.getItem('expenses');
	const expensesData = expensesDataString ? JSON.parse(expensesDataString) : [];

	return (
		<div className='expenses-wrapper mt--30'>
			<h2 className='mb--20'>Expenses List</h2>
			<div className='expenses-list'>
				{expensesData &&
					expensesData.map(({ title, amount, payed, payees, date }: IValuesProps, index: number) => {
						const splitAmount = +amount / payees.length;
						return (
							<div
								className='expense-details flex justify-content--between align-items--center'
								key={index}
							>
								<div className='width--40 flex align-items--center'>
									<div className='wallet-img mr--20'>
										<img src={walletImg} alt='wallet-img' className='width--full height--full' />
									</div>
									<p className='font-size--sm mr--20'>{formatDate(date, 'LL')}</p>
									<div>
										<p className='text--capitalize font-size--lg'>{title}</p>
										<p>
											<span className='font-size--lg mr--5 text--yellow'>${amount}</span>
											<span className='font-size--sm text--grey'>by {payed}</span>
										</p>
									</div>
								</div>
								<div className='text--center'>
									<p className='text--success font-size--lg'>+{splitAmount.toFixed(2)}</p>
									<p className='font-size--sm text--grey'>You are owed</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Expenses;
