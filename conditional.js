var iPhone = 10000;
var myBuget = 9000;

/**
 * if(condistion){
 *  
 * }
 */

if (iPhone < myBuget) {
    console.log('iPhone kine futani marbo')
}
else {
    console.log('iPhone na kine futani marbo')
}

//multi condistion
var isGraduateed = true;
var salary = 5400;
var cars = 1;

// if (isGraduateed == true && salary > 5000) {
//     console.log('cholo biye kori')
// }
// else {
//     console.log('tor kpale biye nai')
// }

if (isGraduateed == true && salary > 5000 && cars >= 1) {
    console.log('cholo biye kori')
}
else {
    console.log('tor kpale biye nai')
}



if (isGraduateed == true || salary > 5000 || cars >= 1) {
    console.log('cholo biye kori')
}
else {
    console.log('tor kpale biye nai')
}


// Multi stage condistion
var money = 30;
var danisPrice = 45;
var butterBread = 35;
var toastBiskut = 20;

if (danisPrice < money) {
    console.log('Dan dan danis khabo');
}
else if (butterBread < money) {
    console.log('Dan dan Butter khabo');
}
else if (toastBiskut < money) {
    console.log('Dan dan Toast khabo');
}
else {
    console.log('khalo cha khamu')
}


// nasted condition
var math = true;
var geometry = true;
var english = false;

if (math == true) {
    if (geometry == true) {

    }
    else {

    }
}
else {

}

