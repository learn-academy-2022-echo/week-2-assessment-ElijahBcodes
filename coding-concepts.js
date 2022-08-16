// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
console.log(cohort.split(""))

// a) Your answer: This will return all the letters as seperate s
// b) Verify and explain:The outcome was [
//   'E', 'c', 'h',
//   'o', ' ', '2',
//   '0', '2', '2'
// ]
// The split method acts on string and splits it with whatever you put inside the "".In this case nothing.

// --------------------2) What will this log?

const greeter = (name) => {
   return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello Learn Student.
// b) Verify and explain: It returned undefined becasue there is no return in the greeter function


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
console.log(multipliedByTwo)

// a) Your answer:It will return all the numbers of the array multipled by two.
// b) Verify and explain:declaring a constant equal to the array using the map iterating each number multiply by 
//The return was [ 8, 10, 12, 14, 16 ]


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: This will return only the odd numbers into an array.
// b) Verify and explain: The output was as expected because the filter method was set to any number that is odd [ 11, 13, 15 ]


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: This will return the index 0 "Javascript" of the languages in the myCodingskills object
// b) Verify and explain:The output was as expected using dot notation gives us JavaScript


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This will return either nothing or George Echo 2022
// b) Verify and explain: The return was Learn { student: 'George', cohort: 'Echo', year: 2022 }
//the whole object was returned reflecting that we made a new object learnStudent using the object Learn
