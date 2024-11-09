class TaskScheduler {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    this.tasks.sort((a, b) => a.priority - b.priority);
  }

  executeTasks() {
    while (this.tasks.length > 0) {
      const task = this.tasks.shift();
      try {
        task.execute();
      } catch (error) {
        console.error(`Error executing task: ${error.message}`);
      }
    }
  }
}

module.exports = TaskScheduler;
