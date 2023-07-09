import { useState } from 'react';
import { formatDate } from 'shared/util/utility';
import { IValuesProps } from '../interface/dashboard';

import walletImg from 'assets/images/wallet.png';
import Money from 'assets/images/money.png';

import CustomModal from 'shared/modal/modal';
import ViewExpense from './viewExpense';

const Expenses = () => {
	const [isViewExpense, setIsViewExpense] = useState(false);
	const [clickedIndex, setClickedIndex] = useState<number | null>(null);

	const expensesDataString = localStorage.getItem('expenses');
	const expensesData = expensesDataString ? JSON.parse(expensesDataString) : [];

	const openPopup = (index: number) => {
		setIsViewExpense(true);
		setClickedIndex(index);
	};

	return (
		<div className='expenses-wrapper mt--30'>
			<h2 className='mb--20'>Expenses List</h2>
			<div className='expenses-list'>
				{expensesData &&
					expensesData.map(
						({ title, amount, payed, payees, date, settleUp }: IValuesProps, index: number) => {
							const splitAmount = +amount / payees.length;
							return (
								<div
									className='cursor--pointer expense-details mb--15 flex justify-content--between align-items--center'
									key={index}
									onClick={() => openPopup(index)}
								>
									<div className='expense-create-wrapper width--40 flex align-items--center'>
										<div className='wallet-img mr--30'>
											<img
												src={walletImg}
												alt='wallet-img'
												className='width--full height--full'
											/>
										</div>
										<div className='expense-info-wrapper flex align-items--center'>
											<p className='created-date font-size--sm mr--30'>
												{formatDate(date, 'LL')}
											</p>
											<div>
												<p className='text--capitalize font-size--lg'>{title}</p>
												<p>
													<span className='font-size--lg mr--5 text--yellow'>₹{amount}</span>
													<span className='font-size--sm text--grey'>by {payed}</span>
												</p>
											</div>
										</div>
									</div>
									<div className='text--center flex align-items--center'>
										{settleUp && (
											<div className='payment-details mr--20 font-size--sm text--grey flex align-items--center'>
												<div className='money-img mr--10'>
													<img src={Money} alt='money' className='width--full height--full' />
												</div>
												Every one paid {payed}
												<span className='text--success ml--5'>₹{splitAmount.toFixed(2)} </span>
											</div>
										)}
										{!settleUp && (
											<div>
												<p
													className={`font-size--lg ${
														payed === 'Rita' ? 'text--success' : 'text--red'
													}`}
												>
													₹{splitAmount.toFixed(2)}
												</p>
												<p className='font-size--sm text--grey'>
													Owed{payed === 'Rita' ? ' to ' : ' by '}you
												</p>
											</div>
										)}
									</div>
								</div>
							);
						}
					)}
			</div>

			{isViewExpense && clickedIndex !== null && (
				<CustomModal
					show={true}
					handleClose={() => setIsViewExpense(false)}
					className='add-expenses-model-wrapper'
				>
					<ViewExpense clickedIndex={clickedIndex} handleClose={() => setIsViewExpense(false)} />
				</CustomModal>
			)}
		</div>
	);
};

export default Expenses;
