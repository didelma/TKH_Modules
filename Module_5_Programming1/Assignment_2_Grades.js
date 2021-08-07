//codePen Link: https://codepen.io/didelma/pen/KKmGYao?editors=1112

let score = prompt("Enter your score: ");
let letterGrade;

if (score >=95)
{
    letterGrade = "A+";
}
else if (score >=88 && score <=94) {
    letterGrade = "A";
} 
else if (score >=84 && score <=87) {
    letterGrade = "B+";
}
else if (score >=80 && score <=83) {
    letterGrade = "B";
} 
else if (score >=76 && score <=79) {
    letterGrade = "C+";
} 
else if (score >=70 && score <=75) {
    letterGrade = "C";
} 
else if (score >=67 && score <=69) {
    letterGrade = "D+";
}
else if (score >=64 && score <=66) {
    letterGrade = "D";
}
else if (score <=63) {
    letterGrade = "F";
}

console.log(letterGrade);