import { FC, useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import CustomModal from 'shared/modal/modal';
import { formatDate } from 'shared/util/utility';
import Confetti from 'assets/animation/confetti.json';

interface IProps {
	clickedIndex: number;
	handleClose: () => void;
}

const ViewExpense: FC<IProps> = ({ clickedIndex, handleClose }) => {
	const [payeesStatus, setPayeesStatus] = useState([]);
	const [isSettleUp, setIsSettleUp] = useState(false);
	const [animation, setAnimation] = useState(false);

	const expensesDataString = localStorage.getItem('expenses');
	const expensesData = expensesDataString ? JSON.parse(expensesDataString) : [];

	const handleSettleUp = (clickedIndex: number) => {
		setAnimation(true);
		setTimeout(() => {
			setIsSettleUp(false);
		}, 3000);

		const updatedExpensesData = [...expensesData];
		updatedExpensesData[clickedIndex] = {
			...updatedExpensesData[clickedIndex],
			settleUp: true,
			settleDate: new Date()
		};

		localStorage.setItem('expenses', JSON.stringify(updatedExpensesData));
	};

	const { title, amount, date, payed, payees } = expensesData[clickedIndex];
	const splitAmount = +amount / payees.length;

	return (
		<div className='expense-details-wrapper'>
			<h3 className='text--center mb--20'> 🧾Expense Details</h3>
			<div>
				<div className='flex justify-content--between align-items--center'>
					<div className='mb--20'>
						<h5 className='text--capitalize'>{title}</h5>
						<h5 className='text--yellow'>₹{amount}</h5>
						<p className='font-size--sm text--grey'>
							Added by {payed} on {formatDate(date)}
						</p>
					</div>
					{!expensesData[clickedIndex].settleUp && (
						<div onClick={() => setIsSettleUp(true)}>
							<button className='common-btn settle-btn'>Settle Up</button>
						</div>
					)}
				</div>
				<div>
					<p className='font-size--xxl mb--10'>
						{payed === 'Rita' ? 'You' : payed} paid ₹{amount}
					</p>
					{payees &&
						payees.map((name: string, index: number) => {
							return (
								<div
									className='font-size--md payees-detail ml--10 mb--5 flex justify-content--between'
									key={index}
								>
									<div className='flex'>
										<p>{name === 'Rita' ? 'You' : name} owes </p>
										<p className='text--success font-size--xl font--medium'>
											&#128184; ₹{splitAmount.toFixed(2)}
										</p>
									</div>
									<p
										className={`status-wrapper font-size--sm ${
											expensesData[clickedIndex].settleUp ? 'status-paid' : 'status-pay'
										}`}
									>
										{expensesData[clickedIndex].settleUp ? 'Paid' : 'Pending'}
									</p>
								</div>
							);
						})}
				</div>
			</div>
			<div className='text--center mt--20'>
				<button className='common-btn cancel-btn' onClick={handleClose}>
					Close
				</button>
			</div>

			{isSettleUp && (
				<CustomModal
					show={true}
					handleClose={() => setIsSettleUp(false)}
					className='add-expenses-model-wrapper'
				>
					<div>
						{animation && <p className='text--center mb--10'>Congratulation all payment are settled</p>}
						<div className='text--center'>
							{!animation && <p className='mb--15'>Are you sure settle all payment ?</p>}
							<button className='common-btn settle-btn' onClick={() => handleSettleUp(clickedIndex)}>
								Settle All payment
							</button>
						</div>
						{animation && (
							<div className='settle-animation position--absolute  z-index--2'>
								<Lottie
									options={{
										animationData: Confetti,
										loop: true,
										autoplay: true
									}}
									speed={1}
									height={1000}
									width={1000}
								/>
							</div>
						)}
					</div>
				</CustomModal>
			)}
		</div>
	);
};

export default ViewExpense;
