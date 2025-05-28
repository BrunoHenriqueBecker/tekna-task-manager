import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';

@Component({ selector: 'app-tasks', templateUrl: './tasks.component.html' })
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  title = ''; description = ''; dueDate = '';
  constructor(private taskService: TaskService, public auth: AuthService) {}
  ngOnInit() { this.load(); }
  load() { this.taskService.getTasks().subscribe((res: any) => this.tasks = res); }
  create() {
    this.taskService.createTask({ title: this.title, description: this.description, dueDate: this.dueDate }).subscribe(() => this.load());
  }
  delete(id: number) { this.taskService.deleteTask(id).subscribe(() => this.load()); }
}
