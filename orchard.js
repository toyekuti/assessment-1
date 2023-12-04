///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];


// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE

//Initialize new variables sumFujiAcres, sumGalaAcres and sumPinkAcres the value 0, and then iterate to get sum for each variety.
let sumFujiAcres = 0;
for (let i = 0; i < fujiAcres.length; i++) {
    //Store the sum for fujiAcres in the variable `sumFujiAcres`
    sumFujiAcres += fujiAcres[i];
}

let sumGalaAcres = 0;
for (i = 0; i < galaAcres.length; i++) {
    //Store the sum for galaAcres in the variable `sumGalaAcres`
    sumGalaAcres += galaAcres[i];
}

let sumPinkAcres = 0;
for (i = 0; i < pinkAcres.length; i++) {
    //Store the sum for pinkAcres in the variable `sumPinkAcres`
    sumPinkAcres += pinkAcres[i];
}

//Store the total sum in the variable `totalAcres`
const totalAcres = (sumFujiAcres + sumGalaAcres + sumPinkAcres);

//Log `totalAcres` to the console.
console.log(totalAcres);


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE

//Method 1

//Initialize new variables avgFujiAcres, avgGalaAcres and avgPinkAcres.

//Divide sumFujiAcres by the length of fujiAcres.
const avgFujiAcres = (sumFujiAcres / fujiAcres.length);
//Divide sumGalaAcres by the length of galaAcres.
const avgGalaAcres = (sumGalaAcres / galaAcres.length);
//Divide sumPinkAcres by the length of pinkAcres.
const avgPinkAcres = (sumPinkAcres / pinkAcres.length);

//Assign the value of sum of the averages to the variable `averageDailyAcres'
const averageDailyAcres = (avgFujiAcres + avgGalaAcres + avgPinkAcres);
//Log `averageDailyAcres` to the console.
console.log(averageDailyAcres);

// //Method 2
// const averageDailyAcres = (totalAcres / 7); //Divide totalAcres by the number of days.
// console.log(averageDailyAcres);


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174;
let days = 0;

// CODE HERE

//While loop runs as long as acresLeft is above 0.
while (acresLeft > 0) {
    days++; //Increment the days variable by 1 for each iteration

    //averageDailyAcres is subtracted from acresLeft
    acresLeft -= averageDailyAcres;
}

console.log(days);  //Log `days` to the console.


// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

//Iterate through each value in the `fujiAcres` array, multiply the value by 6.5
//and push the value to the empty array `fujiTons`
for (let i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i] * 6.5);
}

console.log(fujiTons); //Log `fujiTons` to the console.

//Iterate through each value in the `galaAcres` array, multiply the value by 6.5
//and push the value to the empty array `galaTons`
for (let i = 0; i < galaAcres.length; i++) {
    galaTons.push(galaAcres[i] * 6.5);
}

console.log(galaTons); //Log `galaTons` to the console.

//Iterate through each value in the `pinkAcres` array, multiply the value by 6.5
//and push the value to the empty array `pinkTons`
for (let i = 0; i < pinkAcres.length; i++) {
    pinkTons.push(pinkAcres[i] * 6.5);
}

console.log(pinkTons); //Log `pinkTons` to the console.


// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

//Iterate through each value in the `fujiTons` array, multiply the value by 2000
//add up all the values, and store the total in the variable `fujiPounds`
for (let i = 0; i < fujiTons.length; i++) {
    fujiPounds += (fujiTons[i] * 2000);
}

console.log(fujiPounds); //Log `fujiPounds` to the console.

//Iterate through each value in the `galaTons` array, multiply the value by 2000
//add up all the values, and store the total in the variable`galaPounds`
for (let i = 0; i < galaTons.length; i++) {
    galaPounds += (galaTons[i] * 2000);
}

console.log(galaPounds); //Log `galaPounds` to the console.

//Iterate through each value in the `pinkTons` array, multiply the value by 2000
//add up all the values, and store the total in the variable`pinkPounds`
for (let i = 0; i < pinkTons.length; i++) {
    pinkPounds += (pinkTons[i] * 2000);
}

console.log(pinkPounds); //Log `pinkPounds` to the console.


// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// CODE HERE

//Convert the unit price of apples per variety per dollar by dividing by 100
const fujiProfit = (fujiPrice / 100) * fujiPounds;
console.log(fujiProfit); //Log `fujiProfit` to the console.

const galaProfit = (galaPrice / 100) * galaPounds;
console.log(galaProfit); //Log `galaProfit` to the console.

const pinkProfit = (pinkPrice / 100) * pinkPounds;
console.log(pinkProfit); //Log `pinkProfit` to the console.


// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

//Sum up the values in fujiProfit, galaProfit and pinkProfit
//and assign total sum to the variable `totalProfit`
const totalProfit = (fujiProfit + galaProfit + pinkProfit);
console.log(totalProfit); //Log `totalProfit` to the console.