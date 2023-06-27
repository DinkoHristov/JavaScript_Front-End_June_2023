function emplyeesList(employees) {
    let employeesList = [];
    for(let i = 0; i < employees.length; i++) {
        let name = employees[i];
        let phone = name.length;

        let employee = 
        {
            name: name,
            phone: phone
        };

        employeesList.push(employee);
    }

    employeesList.forEach(e => console.log(`Name: ${e.name} -- Personal Number: ${e.phone}`));
}

emplyeesList([
'Samuel Jackson',
'Will Smith',
'Bruce Willis',
'Tom Holland'
]);