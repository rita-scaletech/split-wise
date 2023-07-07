import { ChangeEvent, FC } from 'react';
import { Field, Formik } from 'formik';
import { ReactSelect } from 'shared/form/reactSelect';
import { IValuesProps } from '../interface/dashboard';
import { REACT_SELECT_STYLE } from 'shared/constants/reactSelect';
import { ADD_EXPENSES_FIELD, ADD_EXPENSES_REACT_SELECT, GROUP_MEMBER_INFO } from '../constants/dashboardConstant';

const initialValues = {
	title: '',
	amount: '',
	payed: '',
	payees: '',
	date: ''
};

interface IExpenseProps {
	handleClose: () => void;
}

const ExpenseForm: FC<IExpenseProps> = ({ handleClose }) => {
	localStorage.setItem('groupMembers', JSON.stringify(GROUP_MEMBER_INFO));

	const handleFormSubmit = (values: IValuesProps) => {
		const currentDate = new Date();
		values.date = currentDate.toISOString();

		const expensesDataString = localStorage.getItem('expenses');
		const expensesData = expensesDataString ? JSON.parse(expensesDataString) : [];

		expensesData.push(values);

		localStorage.setItem('expenses', JSON.stringify(expensesData));
		handleClose();
	};

	const handleChange = (selectedOption: IValuesProps[], setFieldValue: any) => {
		const selectedVal: string[] = [];
		selectedOption &&
			selectedOption.forEach((obj: IValuesProps) => {
				selectedVal.push(obj.label);
			});
		setFieldValue('payees', selectedVal);
		console.log('selectedVal', selectedVal);
	};

	return (
		<Formik
			validateOnChange={false}
			initialValues={initialValues}
			onSubmit={(values: IValuesProps) => handleFormSubmit(values)}
		>
			{({ handleSubmit, setFieldValue, values }: any) => (
				<form onSubmit={handleSubmit} className='add-expense-form-wrapper'>
					{ADD_EXPENSES_FIELD.map(({ type, placeHolder, label, name }, index: number) => (
						<div key={index} className='flex flex--column mt--20'>
							<label className='mb--10'>{label}</label>
							<Field
								placeholder={placeHolder}
								type={type}
								value={values[name]}
								name={name}
								className='form-control'
								onChange={(event: ChangeEvent<HTMLInputElement>) =>
									setFieldValue(name, event.target.value)
								}
							/>
						</div>
					))}

					{ADD_EXPENSES_REACT_SELECT.map(({ placeHolder, label, name, isMulti }, index: number) => (
						<div key={index} className='flex flex--column mt--20'>
							<label className='mb--10'>{label}</label>
							<ReactSelect
								options={GROUP_MEMBER_INFO}
								closeMenuOnSelect={true}
								placeholder={placeHolder}
								name={name}
								isMulti={isMulti}
								styles={{ ...REACT_SELECT_STYLE }}
								onChange={(selectedOption: any) => {
									if (isMulti) {
										handleChange(selectedOption, setFieldValue);
									} else {
										setFieldValue('payed', selectedOption.label);
									}
								}}
							/>
						</div>
					))}

					<div className='mt--30'>
						<button className='mr--10' onClick={handleClose}>
							Cancel
						</button>
						<button type='submit'>Add Expense</button>
					</div>
				</form>
			)}
		</Formik>
	);
};

export default ExpenseForm;
