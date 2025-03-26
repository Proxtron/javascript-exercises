const getAge = (birthYear, deathYear) => {
    if(!deathYear) {
        return new Date().getFullYear() - birthYear;
    }
    return deathYear - birthYear;
}
const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        const currPersonAge = getAge(person.yearOfBirth, person.yearOfDeath);
        const oldestPersonAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        return currPersonAge > oldestPersonAge ? person : oldestPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
