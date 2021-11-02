const employee = {
	name: 'Hector',
	streetAddress: '1234 str',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
	const newOb = { ...employee }
	newOb[key] = value

	return newOb

}

updateEmployeeWithKeyAndValue()
