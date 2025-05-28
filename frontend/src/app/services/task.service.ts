import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private api = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}
  getTasks() { return this.http.get(this.api); }
  createTask(task: any) { return this.http.post(this.api, task); }
  updateTask(id: number, task: any) { return this.http.put(`${this.api}/${id}`, task); }
  deleteTask(id: number) { return this.http.delete(`${this.api}/${id}`); }
}
