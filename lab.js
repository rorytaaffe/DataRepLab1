// Excercise 2
// (a)
const getCourseName = () => "Data Representation & Querying";
console.log(getCourseName());

// (b)
const returnArgument = (arg) => arg;
const myVariable = "Hello, World!";
console.log(returnArgument(myVariable));

// (c)
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(5, 7));

// (d)
const ages = [25, 31, 42, 77];
const doubleAges = ages.map((age) => age < 70 ? age * 2 : age);
console.log(doubleAges);

// Excersise 3
// (a)
const tasksArray = [];

// (b)
const addTask = (task) => {
  tasksArray.push(task);
  console.log(`Task "${task}" added.`);
  return tasksArray.length;
};
// Example usage:
console.log(addTask("Buy groceries")); // Returns 1

// (c)
const listAllTasks = () => {
  tasksArray.forEach((task, index) => {
    console.log(`Task ${index + 1}: ${task}`);
  });
};
// Example usage:
listAllTasks();

// (d)
const deleteTask = (task) => {
  const index = tasksArray.indexOf(task);
  if (index !== -1) {
    tasksArray.splice(index, 1);
    console.log(`Task "${task}" deleted.`);
  } else {
    console.log(`Task "${task}" not found.`);
  }
  return tasksArray.length;
};
// Example usage:
console.log(deleteTask("Buy groceries")); // Returns 0 if successful

// (e)






