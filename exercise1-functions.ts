function twoForMe(name: string = "you") {
  return `One for ${name}, two for me.`;
}

const isLeapYear1 = (year: number): boolean => {
  if (year % 400 === 0) {
    return false;
  } else return true;
};

const isLeapYear2 = (year: number): string => {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    ? "Is leap year"
    : `Isn't leap year`;
};

const isLeapYear3 = (year: number): boolean => {
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
