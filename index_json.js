const fs = require('fs');
const employees = [];

const me = {
    "name": "Smaran",
    "salary": "10000000",
    "id": 1001
}

employees.push(me);

const nextEmp = {
    "name": "Joker",
    "salary": "100000",
    "id": 1002
}

const anotherEmp = {
    "name": "Batman",
    "salary": "1000000",
    "id": 1003
}

employees.push(nextEmp);
employees.push(anotherEmp);

fs.writeFileSync("sampledata.json", JSON.stringify(employees));