const Schema = require("./employees_pb");
const fs = require("fs");

const smaran = new Schema.Employee();
smaran.setId(1001);
smaran.setName("Smaran");
smaran.setSalary(10000000);

const nextEmp = new Schema.Employee();
nextEmp.setId(1002);
nextEmp.setName("Joker");
nextEmp.setSalary(10000);

const anotherEmp = new Schema.Employee();
anotherEmp.setId(1003);
anotherEmp.setName("Batman");
anotherEmp.setSalary(100000);

const employees = new Schema.Employees();
employees.addEmployees(smaran);
employees.addEmployees(nextEmp);
employees.addEmployees(anotherEmp);

const bytes = employees.serializeBinary();
fs.writeFileSync("binary", bytes);

const read_employees = Schema.Employees.deserializeBinary(bytes);
console.log(read_employees.toString());