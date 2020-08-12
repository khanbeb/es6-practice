const ages = [12, 14, 16, 17, 13];
const ages2 = [15, 16, 12, 30];
const ages3 = [15, 16, 12, 30];
const allAges = ages.concat(ages2).concat([5]).concat(ages3)
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);



const business = 500;
const minister = 600;
const shochib = 300;
const takaPoysa = [500, 600, 300]
// const maximun = Math.max(business, minister,shochib);

const maximun = Math.max(...takaPoysa);
console.log(maximun);