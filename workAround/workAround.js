/*
WorkAround is a human resources program that returns basic information about an employee,
based on salary data.
Objective: modify the program so it makes use of JavaScript modules.
Steve Hanlon Oct 10, 2017
*/

// import each exported variable using variable name
import { getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } from './employee';
// import default exported object
import Employee from './employee';

// get employee info using imported variables
function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

// log the employee info results
getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
