'use strict';

let choose;

const clearFunction = function () {
  console.clear();
  console.log(menu);
  choose = prompt(`Select your choice: `);
};

const showTasks = function () {
  console.clear();
  console.log(`


Tasks List:`);
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
};

const tasks = [
  'Workout',
  'Learning',
  'Shopping',
  'Car wash',
  'Reading books',
  'Go for a walk',
];

const menu = `


"To Do" List

1. Show Tasks
2. Add Task
3. Delete Task
4. Quit`;

console.log(menu);

do {
  if (choose == 1) {
    showTasks();
    const close = prompt(`Click "OK" for back to main menu`);
  }

  if (choose == 2) {
    showTasks();
    tasks.push(prompt(`Write new task which you want to add:`));
    showTasks();
    const close = prompt(`New task has added to the list on the last position.
Click "OK" for back to main menu`);
  }

  if (choose == 3) {
    showTasks();
    const delTask = prompt(
      `Type the number of task you want to remove from the list (choose proper number!):`
    );

    if (delTask == 0 || delTask > tasks.length) {
      const close = prompt(
        `There's is no task of number ${delTask}, so you can't delete it. Click "OK" for back to main menu`
      );
    } else {
      tasks.splice(delTask - 1, 1);
      showTasks();
      const close = prompt(`Your task has been deleted from the list.
    Click "OK" for back to main menu`);
    }
  }
  clearFunction();
} while (choose != 4);

if (choose == 4) {
  console.clear();
  console.log(`
    
    
Thanks and see you again next time!`);
}
