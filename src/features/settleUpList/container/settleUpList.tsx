import { FC, Fragment } from 'react';

import { formatDate } from 'shared/util/utility';
import { IValuesProps } from 'features/dashboard/interface/dashboard';
import settleUpImage from 'assets/images/paidImage.png';

const SettleUpList: FC = () => {
	const settleUpDataString = localStorage.getItem('expenses');
	const settleUpData = settleUpDataString ? JSON.parse(settleUpDataString) : [];

	return (
		<div className='expenses-wrapper mt--30 ml--30 mr--30 mb--30'>
			<h2 className='mb--20'>Settled Amount List</h2>
			<div className='expenses-list settle-list'>
				{settleUpData &&
					settleUpData.map(
						({ title, amount, payed, payees, date, settleDate }: IValuesProps, index: number) => {
							const splitAmount = +amount / payees.length;
							return (
								<Fragment key={index}>
									{settleUpData[index].settleUp && (
										<div
											className='expense-details mb--15 flex justify-content--between align-items--center'
											key={index}
										>
											<div className='expense-create-wrapper width--70 flex align-items--center'>
												<div className='info-wrapper flex align-items--center'>
													<div className='settle-img mr--30'>
														<img
															src={settleUpImage}
															alt='settle-img'
															className='width--full height--full'
														/>
													</div>
													<div className='flex date-info-wrapper'>
														<div className='created-date font-size--sm mr--30'>
															<span className='font-size--sm text--grey'>
																Created Date
															</span>
															<p>{formatDate(date, 'LL')}</p>
														</div>
														<div className='created-date font-size--sm mr--30'>
															<span className='font-size--sm text--grey'>
																Settle Date
															</span>
															<p>{formatDate(settleDate, 'LL')}</p>
														</div>
													</div>
												</div>

												<div className='expense-payment-details'>
													<p className='text--capitalize font-size--lg'>{title}</p>
													<p>
														<span className='font-size--lg mr--5 text--yellow'>
															₹{amount}
														</span>
														<span className='font-size--sm text--grey'>by {payed}</span>
													</p>
												</div>
											</div>
											<div className='text--center'>
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
										</div>
									)}
								</Fragment>
							);
						}
					)}
			</div>
		</div>
	);
};

export default SettleUpList;
