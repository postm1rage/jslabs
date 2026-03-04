function Сотрудник(name, department, phone, salary) {
    this.name = name;
    this.department = department;
    this.phone = phone;
    this.salary = salary;
    this.showData = function() {
        console.log('Имя: ' + this.name);
        console.log('Отдел: ' + this.department);
        console.log('Телефон: ' + this.phone);
        console.log('Зарплата: ' + this.salary);
    };
}

let employee1 = new Сотрудник('Пётр', 'IT', '12312312', 50000);
employee1.showData();