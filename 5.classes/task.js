
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state=100, type=null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        let calc = this.state * 1.5;
        this.state = calc;
    }

    set state(value) {
        if(value < 0) {
            this._state = 0;
        } else if(value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(...params) {
        super(...params);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(...params) {
        const currentParams = typeof params[0] === 'object' ? Object.values(params[0]) : params;
        const author = currentParams.splice(0, 1)[0];

        super(...currentParams);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(...params) {
        super(...params);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(...params) {
        super(...params);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(...params) {
        super(...params);
        this.type = "detective";
    }
}

class Library {
    constructor(name='', books=[]) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if(book?.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const searchResult = this.books.find((book) => book[type] == value);
        return searchResult ?? null;
    }

    giveBookByName(bookName) {
        const searchBook = this.findBookBy('name', bookName);

        if(searchBook) {
            this.books.splice(this.books.indexOf(searchBook), 1);
        }

        return searchBook;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subjectName) {
        if(mark < 2 || mark > 5) {
            return false;
        }

        if(!this.marks.hasOwnProperty(subjectName)) {
            this.marks[subjectName] = [];
        }

        this.marks[subjectName].push(mark);
    }

    getAverageBySubject(subjectName) {
        if(!this.marks.hasOwnProperty(subjectName)) {
            return 0;
        }

        const marksRating = this.marks[subjectName].reduce((acc, mark, index, arr) => {
            if(index === arr.length - 1) {
                acc += mark;
                return acc / arr.length;
            }

            return acc + mark;
        }, 0);

        return marksRating;
    }

    getAverage() {
        const subjectNames = Object.keys(this.marks);

        if(!subjectNames.length) {
            return 0;
        }

        const currentObject = this;
        let summMarks = 0;
        const marksResult = subjectNames
            .forEach((subjectName) => summMarks += currentObject.getAverageBySubject(subjectName));

        return summMarks / subjectNames.length;
    }
}