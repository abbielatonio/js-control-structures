function displayGrade(first, second, third, fourth) {
  let displayGrade = (85, 89, 90, 94);
  switch (displayGrade) {
    case 85:
      console.log(
        " The student's first qtr grade is " + displayGrade.toString()
      );
      break;
    case 89:
      console.log(
        " The student's first qtr grade is " + displayGrade.toString()
      );
      break;
    case 90:
      console.log(
        " The student's first qtr grade is " + displayGrade.toString()
      );
      break;
    case 94:
      console.log(
        " The student's first qtr grade is " + displayGrade.toString()
      );
      break;
    default:
      console.log("Invalid input");
  }
}

console.log(displayGrade(94));

function computeAverage(grade) {
  return grade.reduce((a, b) => a + b) / grade.length;
}

console.log(computeAverage([85, 89, 90, 94]));

function displayAverage(grade) {
  let displayAverage = grade.reduce((a, b) => a + b) / grade.length;
  switch (true) {
    case displayAverage >= 93 && displayAverage <= 100:
      console.log(" The student's transmuted grade is 1.00");
      break;
    case displayAverage >= 90 && displayAverage <= 93:
      console.log(" The student's transmuted grade is 1.25");
      break;
    case displayAverage >= 87 && displayAverage <= 90:
      console.log(" The student's transmuted grade is 1.5");
      break;
    case displayAverage >= 84 && displayAverage <= 87:
      console.log(" The student's transmuted grade is 1.75");
      break;
    case displayAverage >= 80 && displayAverage <= 84:
      console.log(" The student's transmuted grade is 2.00");
      break;
    case displayAverage >= 75 && displayAverage <= 80:
      console.log(" The student's transmuted grade is 2.25");
      break;
    case displayAverage >= 70 && displayAverage <= 75:
      console.log(" The student's transmuted grade is 2.5");
      break;
    case displayAverage >= 65 && displayAverage <= 70:
      console.log(" The student's transmuted grade is 2.75");
      break;
    case displayAverage >= 60 && displayAverage <= 65:
      console.log(" The student's transmuted grade is 3");
      break;
    case displayAverage >= 55 && displayAverage <= 60:
      console.log(" The student's transmuted grade is 4");
      break;
    case displayAverage >= 0 && displayAverage <= 55:
      console.log(" The student's transmuted grade is 5");
      break;
    case displayAverage > 100:
      throw " Grade cannot be more than 100";
    default:
      console.log("Invalid input");
  }
}

console.log(displayAverage([89, 93, 90, 91]));

function computeTransmutedGrade(grade) {
  let computeTransmutedGrade = grade.reduce((a, b) => a + b) / grade.length;
  switch (true) {
    case computeTransmutedGrade >= 93 && computeTransmutedGrade <= 100:
      console.log(
        " The transmuted grade is 1.00 and the student's status is passed"
      );
      break;
    case computeTransmutedGrade >= 90 && computeTransmutedGrade <= 93:
      console.log(
        " The transmuted grade is 1.25 and the student's status is passed"
      );
      break;
    case computeTransmutedGrade >= 87 && computeTransmutedGrade <= 90:
      console.log(
        " The transmuted grade is 1.5 and the student's status is passed"
      );
      break;
    case computeTransmutedGrade >= 84 && computeTransmutedGrade <= 87:
      console.log(
        " The transmuted grade is 1.75 and the student's status is passed"
      );
      break;
    case computeTransmutedGrade >= 80 && computeTransmutedGrade <= 84:
      console.log(
        " The transmuted grade is 2 and the student's status is passed"
      );
      break;
    case computeTransmutedGrade >= 75 && computeTransmutedGrade <= 80:
      console.log(
        " The transmuted grade is 2.25 and the student's status is passed"
      );
      break;
    case computeTransmutedGrade >= 70 && computeTransmutedGrade <= 75:
      console.log(
        " The transmuted grade is 2.5 and the student's status is passed"
      );
      break;
    case computeTransmutedGrade >= 65 && computeTransmutedGrade <= 70:
      console.log(
        " The transmuted grade is 2.75 and the student's status is passed"
      );
      break;
    case computeTransmutedGrade >= 60 && computeTransmutedGrade <= 65:
      console.log(
        " The transmuted grade is 3 and the student's status is passed"
      );
      break;
    case computeTransmutedGrade >= 55 && computeTransmutedGrade <= 60:
      console.log(
        " The transmuted grade is 4 and the student's status is failed"
      );
      break;
    case computeTransmutedGrade >= 0 && computeTransmutedGrade <= 55:
      console.log(
        " The transmuted grade is 5 and the student's status is failed"
      );
      break;
    case computeTransmutedGrade > 100:
      throw " Grade cannot be more than 100";
    default:
      console.log("Invalid input");
  }
}

console.log(computeTransmutedGrade([95, 100, 93, 90]));
