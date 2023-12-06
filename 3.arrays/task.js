function compareArrays(arr1, arr2) {
    return arr1.length == arr2.length &&
        arr1.every((element, index) => element === arr2[index] && index === arr2.indexOf(element));
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => user.gender == gender && users.length)
        .reduce((acc, userObj, index, arr) => {

            if(index === arr.length - 1) {
                acc += userObj.age;
                return acc / arr.length;
            }

            return acc + userObj.age;
        }, 0);
}