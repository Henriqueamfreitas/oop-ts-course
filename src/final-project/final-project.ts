interface Notifier {
  send(message: string): void
}

class ConsoleNotifier implements Notifier {
  send(message: string): void {
    console.log(`ConsoleNotifier: ${message}`);
  }
}

type TaskStatus = "open" | "in_progress" | "done"

abstract class Task {
  private static nextId = 1
  public readonly id: number
  public title: string
  protected status: TaskStatus
  protected notifier: Notifier

  constructor(title: string, notifier: Notifier) {
    this.id = Task.nextId
    this.title = title
    this.status = "open"
    this.notifier = notifier
    Task.nextId++
  }

  public start() {
    this.status = "in_progress"
    this.notifier.send(`Task ${this.id} started.`)
  }

  public complete() {
    this.status = "done"
    this.notifier.send(`Task ${this.id} completed.`)
  }

  public getStatus() {
    return this.status
  }

  abstract estimateHours(): number

  summary(): string { /////
    return 'Task concluded'
  }
}

type Severity = "low" | "medium" | "high"

class BugTask extends Task {
  private severity: Severity

  constructor(severity: Severity, title: string, notifier: Notifier) {
    super(title, notifier)
    this.severity = severity
  }

  estimateHours(): number {
    if (this.severity === "low") return 2
    if (this.severity === "medium") return 4
    if (this.severity === "high") return 8
    return 0
  }

  override summary(): string {
    return `====== Bugtask report ======
[${this.id}] ${this.title}
Status: ${this.getStatus()}
Estimated hours: ${this.estimateHours()}
    `
  }
}

type Complexity = 1 | 2 | 3

class FeatureTask extends Task {
  private complexity: Complexity

  constructor(complexity: Complexity, title: string, notifier: Notifier) {
    super(title, notifier)
    this.complexity = complexity
  }

  estimateHours(): number {
    if (this.complexity === 1) return 2
    if (this.complexity === 2) return 4
    if (this.complexity === 3) return 8
    return 0
  }

  override summary(): string {
    // return `${this.title} - FeatureTask - Complexity: ${this.complexity} - Estimated hours: ${this.estimateHours()}` 
    return `====== Featuretask report ======
[${this.id}] ${this.title}
Complexity: ${this.complexity}
Status: ${this.getStatus()}
Estimated hours: ${this.estimateHours()}
    `}
}

class ResearchTask extends Task {
  private topic: string
  constructor(topic: string, title: string, notifier: Notifier) {
    super(title, notifier)
    this.topic = topic
  }

  estimateHours(): number { return 2 } /////

  override summary(): string {
    return `====== Researchtask report ======
[${this.id}] ${this.title}
Topic: ${this.topic}
Status: ${this.getStatus()}
Estimated hours: ${this.estimateHours()}
    `}
}

interface TaskRepository {
  add(task: Task): void
  all(): Task[]
  findById(id: number): Task | undefined
}

class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = []

  add(task: Task): void {
    const findTask = this.findById(task.id)
    if (findTask) {
      console.log(`Task with id ${task.id} already exists.`)
    } else {
      this.tasks.push(task)
      console.log(`Task with id ${task.id} added.`)
    }
  }
  all(): Task[] {
    return this.tasks
  }
  findById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id)
  }
}

class TaskService {
  constructor(private repository: TaskRepository, private notifier: Notifier) { }

  createBug(title: string, severity: Severity) {
    const newBug = new BugTask(severity, title, this.notifier)
    this.repository.add(newBug)
    return newBug.id
  }

  createFeature(title: string, complexity: Complexity) {
    const newFeature = new FeatureTask(complexity, title, this.notifier)
    this.repository.add(newFeature)
    return newFeature.id
  }

  createResearch(title: string, topic: string) {
    const newResearch = new ResearchTask(topic, title, this.notifier)
    this.repository.add(newResearch)
    return newResearch.id
  }

  startTask(id: number) {
    this.repository.findById(id)?.start()
  }
  completeTask(id: number) {
    this.repository.findById(id)?.complete()
  }
  printReport() {
    this.repository.all().forEach(task => {
      console.log(task.summary())
    })
  }
}

const taskService = new TaskService(new InMemoryTaskRepository(), new ConsoleNotifier())
const task1 = taskService.createBug("Fix login issue", "high")
const task2 = taskService.createFeature("Add search functionality", 2)
const task3 = taskService.createResearch("Investigate new framework", "React 18")
taskService.startTask(task1)
taskService.startTask(task2)
taskService.startTask(task3)
taskService.completeTask(task1)
taskService.completeTask(task2)
taskService.completeTask(task3)
taskService.printReport()

console.log(taskService)
console.log(task1)
console.log(task2)
console.log(task3)