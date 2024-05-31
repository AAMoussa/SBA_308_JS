// SBA 308: JavaScript Fundamentals

// First provide four different types of data as dictionaries or Objects.
// These are the data that will test My Algorithm.

// The procided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided Assignment Group

const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
          },
          {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
          },
          {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
          }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  
  function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    // {
    //   id: 125,
    //   avg: 0.985, // (47 + 150) / (50 + 150)
    //   1: 0.94, // 47 / 50
    //   2: 1.0 // 150 / 150
    // },
    // {
    //   id: 132,
    //   avg: 0.82, // (39 + 125) / (50 + 150)
    //   1: 0.78, // 39 / 50
    //   2: 0.833 // late: (140 - 15) / 150
    // }
  ];

// // function that calculates the average

// const learnerData = [
//     {
//         id: 125,
//         totalScore: 0,
//         total_posible: 0
//     },
//     {
//         id: 132
//     }
// ]
//   submissions.forEach((learner) => {
    

// }); 

 // Loop through LearnerSubmissions to calculate scores for each learner
 submissions.forEach(submission => {
    let learnerData = result.find(data => data.id === submission.learner_id);
    if (!learnerData) {
      learnerData = {
        id: submission.learner_id,
        totalScore: 0,
        totalPossible: 0,
        scores: {}
      };
      result.push(learnerData);
    }
    
    const assignment = ag.assignments.find(assignment => assignment.id === submission.assignment_id);
    if (assignment) {
      const { score, points_possible } = submission.submission;
      learnerData.totalScore += score;
      learnerData.totalPossible += points_possible;
      learnerData.scores[submission.assignment_id] = score / points_possible;
    }
  });
  
  // Calculate average and convert to percentage
  result.forEach(learnerData => {
    learnerData.avg = learnerData.totalScore / learnerData.totalPossible;
    learnerData.avg = isNaN(learnerData.avg) ? 0 : learnerData.avg;
    learnerData.avg = Math.round(learnerData.avg * 1000) / 1000; // Round to 3 decimal places
    for (const assignmentId in learnerData.scores) {
      const score = learnerData.scores[assignmentId];
      learnerData.scores[assignmentId] = Math.round(score * 1000) / 1000; // Round to 3 decimal places
    }
  });
  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
  