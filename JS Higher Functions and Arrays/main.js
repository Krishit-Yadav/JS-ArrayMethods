const companies = [
    {name: "ABC Motors", category: "Automobile", start: 1963, end: 2020},
    {name: "DEF Finance", category: "Finance", start: 1983, end: 2012},
    {name: "GHI Technologies", category: "Technology", start: 1993, end: 2018},
    {name: "JKL Foundry", category: "Foundary", start: 1665, end: 2000},
    {name: "MNO MotoCorp", category: "Automobile", start: 1763, end: 2020},
    {name: "PQR Liquiors", category: "Winery", start: 1320, end: 2010},
    {name: "STU Almalia", category: "Finance", start: 1960, end: 2011},
    {name: "VWX Tech'EMs", category: "Technology", start: 1800, end: 2018},
    {name: "YZA Retailers", category: "Retail", start: 1953, end: 2003},
    {name: "FAK Construction", category: "Construction", start: 2000, end: 2006},
    {name: "WOW Groomings", category: "Grooming", start: 1801, end: 2019},
    {name: "ESS Motoworld", category: "Automobile", start: 1773, end: 1997},
    {name: "VSH TechWorld", category: "Technology", start: 1783, end: 1993},
    {name: "KIA Autos", category: "Automobile", start: 1793, end: 1896},
    {name: "BMW", category: "Automobile", start: 1803, end: 2001},
];

const ages = [64, 81, 100, 4, 49, 16, 25, 1, 49, 121, 36, 144, 4, 9, 64, 81];

// SIMPLE FOR FUNCTION //

/*
for(let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}
*/

// FOR EACH METHOD //

/*
companies.forEach(function(company){
    console.log(company);
});
*/

// FILTER METHOD //

// 1ST USING FOR LOOP //

/*
let canDrink = [];
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);
*/

// USING FILTER //

// 1st Filter Method //

/*
const canDrink = ages.filter(function (age) {
    if( age >= 21){
        return true;
    }
});
console.log(canDrink);
*/

// 2nd Filter Method //

/*
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);
*/

// MORE EXAMPLES OF FILTER //

/* 
const companyRetail = companies.filter(company => company.category === 'Retail');
console.log(companyRetail);
*/

/*
const companyAutomobile = companies.filter(company => company.category === 'Automobile');
console.log(companyAutomobile);
*/

/*
const companyTechnology = companies.filter(company => company.category === 'Technology');
console.log(companyTechnology);
*/

/*
const companyEighties = companies.filter(company => (company.start >= 1800 && company.start < 1900 ));
console.log(companyEighties);
*/

/*
const companySixtiesSeventies = companies.filter(company => (company.start >= 1600 && company.start < 1800 ));
console.log(companySixtiesSeventies);
*/

/*
const companyLastMoreThanFifty = companies.filter(company => (company.end - company.start) > 50);
console.log(companyLastMoreThanFifty);
*/

/*
const companyLastLessThanTen = companies.filter(company => (company.end - company.start) < 10);
console.log(companyLastLessThanTen);
*/

// MAP METHOD //

/*
const companyNames = companies.map(company => company.name);
console.log(companyNames);
*/

/*
const companyNamesStartEndDate = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyNamesStartEndDate);
*/

/*
const companyNamesCategories = companies.map(company => `${company.name} [${company.category}]`);
console.log(companyNamesCategories);
*/

/*
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);
*/

/*
const agesDoubled = ages.map(age => age * 2);
console.log(agesDoubled);
*/

/*
const agesSquareDoubled = ages.map(age => (Math.sqrt(age) * 2));
console.log(agesSquareDoubled);
*/

// SORT METHOD (SORTING) //

// LONG METHOD //

/*
const sortCompany = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    }
    else{
        return -1;
    }
});
*/

// SHORTER METHOD //
/*
const sortCompany = companies.sort((a, b) => (a.start > b.start ? 1 : -1 ));
console.log(sortCompany);
*/

/*
const sortCompanyEnd = companies.sort((a, b) => (a.end < b.end ? 1 : -1 ));
console.log(sortCompanyEnd);
*/

/*
const sortAgesLowestToHeightest = ages.sort((a, b) => (a > b ? 1 : -1 ));
console.log(sortAgesLowestToHeightest);
*/

/*
const sortAgesLowestToHeightest = ages.sort((a, b) => a-b);
console.log(sortAgesLowestToHeightest);
*/

/*
const sortAgesHeightestToLowest = ages.sort((a, b) => b-a);
console.log(sortAgesHeightestToLowest);
*/

// REDUCE METHODS //

/*
const ageSum = ages.reduce(function(total, age){
    return total + age;
}, 0);

console.log(ageSum);
*/

/*
const ageSum = ages.reduce((a,b) => a + b, 0);
console.log(ageSum);
*/

/*
const companyYearsSum = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
}, 0);
console.log(companyYearsSum);
*/

/*
const companyYearsSum = companies.reduce((total, company) => total + (company.end - company.start), 0 );
console.log(companyYearsSum);
*/

// COMBINING VARIOUS METHODS //

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b) => a-b)
.reduce((a,b) => a + b, 0);
console.log(combined);
