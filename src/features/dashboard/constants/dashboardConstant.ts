const ADD_EXPENSES_FIELD = [
	{
		type: 'text',
		placeHolder: 'Expense title',
		label: 'Expense Title',
		name: 'title'
	},
	{
		type: 'number',
		placeHolder: 'Enter expense amount',
		label: 'Amount',
		name: 'amount'
	}
];

const ADD_EXPENSES_REACT_SELECT = [
	{
		placeHolder: 'Select payed',
		label: 'Who Payed?',
		name: 'payed',
		isMulti: false
	},
	{
		placeHolder: 'Select payees',
		label: 'Select Which People ow an equal share',
		name: 'payees',
		isMulti: true
	}
];

const GROUP_MEMBER_INFO = [
	{ label: 'Rita', value: '1' },
	{ label: 'Janvi', value: '2' },
	{ label: 'Jasmeen', value: '3' },
	{ label: 'Kinjal', value: '4' },
	{ label: 'Utsav', value: '5' }
];

export { ADD_EXPENSES_FIELD, GROUP_MEMBER_INFO, ADD_EXPENSES_REACT_SELECT };
