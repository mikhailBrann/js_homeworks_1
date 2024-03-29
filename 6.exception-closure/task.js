﻿class Triangle {
    constructor(a, b, c) {
        if(a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const halfPerimetr = this.perimeter / 2;
        const calcResult = Math.sqrt(
            halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c)
        ).toFixed(3);

        return parseFloat(calcResult);
    }
}

function getTriangle(...params) {
    try {
        const triangle = new Triangle(...params);
        return triangle;
    } catch (error) {
        const errorObj = {
            perimeter: "Ошибка! Треугольник не существует",
            area: "Ошибка! Треугольник не существует",
        };

        Object.freeze(errorObj);

        return errorObj;
    }
}

function parseCount(inputValue) {
    const result = Number.parseFloat(inputValue);

    if(Number.isNaN(result)) {
        throw new Error('Невалидное значение');
    }

    return  result;
}

function validateCount(inputValue) {
    try {
        const validateValue = parseCount(inputValue);
        return validateValue;
    } catch (error) {
        return error;
    }
}