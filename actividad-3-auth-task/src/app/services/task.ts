import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Dormir 8 horas', completed: false },
    { id: 2, title: 'Aprender otro lenguaje de programación', completed: true },
    { id: 3, title: 'Pagar recibo de celular', completed: false }
  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks).pipe(delay(200)); 
  }

  addTask(title: string): Observable<Task> {
    const newTask: Task = {
      id: Date.now(), 
      title,
      completed: false
    };
    this.tasks.push(newTask);
    return of(newTask).pipe(delay(200));
  }

  deleteTask(id: number): Observable<boolean> {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return of(true).pipe(delay(200));
  }

  toggleTask(id: number): Observable<Task | undefined> {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
    return of(task).pipe(delay(200));
  }

  updateTaskTitle(id: number, newTitle: string): Observable<Task | undefined> {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.title = newTitle; 
    }
    return of(task).pipe(delay(200));
  }
}