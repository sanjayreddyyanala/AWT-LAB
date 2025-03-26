import { Component } from '@angular/core';
import { StdServiceService } from './std-service.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students: any[] = [];
  editStudentDetails = { id: 0, name: '', branch: '' };

  constructor(private StdServiceService: StdServiceService) {
    this.students = this.StdServiceService.getStudents();
  }

  deleteStudent(id: number) {
    this.StdServiceService.deleteStudent(id);
    this.students = this.StdServiceService.getStudents();
  }

  editStudent(id: number) {
    let student = this.students.find(s => s.id === id);
    if (student) {
      this.editStudentDetails = { ...student };
    }
  }

  submitEdit() {
    this.StdServiceService.editStudent(this.editStudentDetails.id, this.editStudentDetails);
    this.students = this.StdServiceService.getStudents();
    this.editStudentDetails = { id: 0, name: '', branch: '' };
  }

  addStudent(id: any, name: any, branch: any) {
    this.StdServiceService.addStudent(+id.value, name.value, branch.value);
    this.students = this.StdServiceService.getStudents();
  }
}
