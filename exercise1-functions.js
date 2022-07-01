function twoForMe(name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", two for me.");
}
var isLeapYear1 = function (year) {
    if (year % 400 === 0) {
        return false;
    }
    else
        return true;
};
var isLeapYear2 = function (year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
        ? "Is leap year"
        : "Isn't leap year";
};
var isLeapYear3 = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(twoForMe("Paul"));
console.log(twoForMe());
console.log(isLeapYear1(2012));
console.log(isLeapYear1(2013));
console.log(isLeapYear2(2012));
console.log(isLeapYear2(2013));
console.log(isLeapYear3(2012));
console.log(isLeapYear3(2013));
