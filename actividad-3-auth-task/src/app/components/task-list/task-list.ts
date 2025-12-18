import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { TaskService } from '../../services/task';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.scss']
})
export class TaskListComponent implements OnInit {
  private authService = inject(AuthService);
  private taskService = inject(TaskService);
  private router = inject(Router);
  private cd = inject(ChangeDetectorRef); 
  tasks: Task[] = [];
  newTaskTitle: string = '';
  isLoading: boolean = false;

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.isLoading = true;
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
      this.isLoading = false;
      this.cd.detectChanges(); 
    });
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.isLoading = true;
      this.taskService.addTask(this.newTaskTitle).subscribe(() => {
        this.newTaskTitle = ''; 
        this.loadTasks(); 
      });
    }
  }

  toggleTask(task: Task) {
    this.taskService.toggleTask(task.id).subscribe(() => {
      this.cd.detectChanges(); 
    });
  }

  deleteTask(id: number) {
    if(confirm('¿Estás seguro de borrar esta tarea?')) {
      this.isLoading = true;
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  logout() {
    this.authService.logout();
  }

  editTask(task: Task) {
    const newTitle = prompt('Editar tarea:', task.title);
    if (newTitle && newTitle.trim() !== '') {
      this.isLoading = true;
      this.taskService.updateTaskTitle(task.id, newTitle).subscribe(() => {
        this.loadTasks(); 
      });
    }
  }
}