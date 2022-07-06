/*
* Each term has 4 exams, several exercises.
* Every exam has a fixed max score of 100
* Exercises have varied maximum score values and counts
* The total max point value for all exercise in any term is always 100
*
* exam weight = .65
* exercise weight = .35
*
* Example term:
* 5 exercises possible score maximums [30, 20, 10, 20, 10]
*
* Example term 2:
* 3 exercises maximums [20, 30, 50]
*
* Determine student's grade
* 1. Student average score from four exams
* 2. Sum all exercise scores
* 3. apply weights to compute the student final percent grade
* 4. round the percent grade to nearest integer
* 5. Determine letter grade
* */

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;
const EXAMS_PER_SEMESTER = 4;

const total = (scores) => scores.reduce((sum, score) => sum + score);
const average = (scores) => total(scores) / scores.length;
const applyWeight = (sum, weight) => sum * weight;
const calculateAverage = (exams, exercises) => {
  const examScore = applyWeight(exams, EXAM_WEIGHT);
  const exerciseScore = applyWeight(exercises, EXERCISE_WEIGHT);
  return Math.round(examScore + exerciseScore);
};

const min = (grades) => Math.min(...grades);
const max = (grades) => Math.max(...grades);

const letterGrade = (percentage) => {
  if (percentage >= 93) {
    return 'A';
  } if (percentage >= 85) {
    return 'B';
  } if (percentage >= 77) {
    return 'C';
  } if (percentage >= 69) {
    return 'D';
  } if (percentage >= 60) {
    return 'E';
  }
  return 'F';
};

const calculateGrade = ({ scores: { exams, exercises } }) => {
  const examAverage = average(exams);
  const exerciseScore = total(exercises);
  const percentGrade = calculateAverage(examAverage, exerciseScore);
  return `${percentGrade} (${letterGrade(percentGrade)})`;
};

const examSummary = (grades) => ({
  average: +average(grades).toFixed(1),
  minimum: min(grades),
  maximum: max(grades),
});

const generateExamSummaries = (scores) => {
  const exams = [];
  for (let idx = 0; idx < EXAMS_PER_SEMESTER; idx += 1) {
    const grades = scores.map((s) => s[idx]);
    exams.push(examSummary(grades));
  }
  return exams;
};

function generateClassRecordSummary(scores) {
  const studentGrades = Object.values(scores).map(calculateGrade);
  const exams = generateExamSummaries(Object.values(scores).map((s) => s.scores.exams));
  return { studentGrades, exams };
}

const studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//     exams: [
//   { average: 75.6, minimum: 50, maximum: 100 },
//   { average: 86.4, minimum: 70, maximum: 100 },
//   { average: 87.6, minimum: 60, maximum: 100 },
//   { average: 91.8, minimum: 80, maximum: 100 },
// ],
// }
