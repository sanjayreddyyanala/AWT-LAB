import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StdServiceService {
  private students = [
    { id: 1, name: 'sanjay', branch: 'IT' },
    { id: 2, name: 'varshith', branch: 'IT' },
    { id: 3, name: 'sathvik', branch: 'CSE' },
  ];

  getStudents() {
    return this.students;
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }

  editStudent(id: number, updatedStudent: any) {
    let index = this.students.findIndex(student => student.id === id);
    if (index != -1) {
      this.students[index] = updatedStudent;
    }
  }

  addStudent(id: number, name: string, branch: string) {
    this.students.push({ id, name, branch });
  }
}
