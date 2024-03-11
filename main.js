import createEmployeesObject from './0x00-ES6_basic/11-createEmployeesObject';

import createReportObject from './0x00-ES6_basic/12-createReportObject';

import createIteratorObject from "./0x00-ES6_basic/100-createIteratorObject";
const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}