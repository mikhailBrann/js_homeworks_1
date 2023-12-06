function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];

    return this;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if('marks' in this) {
      this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if(('marks' in this) && this.marks.length > 0 && Math.max(...this.marks) > 0) {
        return this.marks.reduce((acc, mark, index, marksArr) => {
            if(index == marksArr.length - 1) {
                acc += mark;
                return acc / marksArr.length;
            }

            return acc += mark;
        }, 0);
    }

    return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}
