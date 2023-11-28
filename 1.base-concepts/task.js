"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let discriminant =  Math.pow(b, 2) - 4 * a * c;

    if(discriminant < 0) {
      return arr;
    } else if(discriminant == 0) {
      let root = -b / (2 * a);

      arr.push(root);
    } else if(discriminant > 0) {
      let rootOne = (-b + Math.sqrt(discriminant) ) / (2 * a);
      let rootTwo = (-b - Math.sqrt(discriminant) ) / (2 * a);

      arr = [rootOne, rootTwo];
    }

    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyInterestRate = (percent / 100) / 12;
    let creditBody = amount - contribution;
    let payment = creditBody *
        (monthlyInterestRate + (monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1)));

    payment = Number((payment * countMonths).toFixed(2));
    return payment;
}