import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [NgFor,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  students = [
    {
      id : 1,
      name  : "sanjay",
      branch : "IT"
    },
    {
      id : 2,
      name  : "varshith",
      branch : "IT"
    },
    {
      id : 3,
      name  : "sathvik",
      branch : "CSE"
    } 
  ]
  deleteStudent(id : any) {
    console.log("delete");
    this.students = this.students.filter((student) => student.id != id);
  }

  editStudentDetails = {name : "",id : 0,branch : ""};
  editStudent(id : any) {
    console.log("edit");
    let index = this.students.findIndex((student)=>student.id == id);
    this.editStudentDetails = {...this.students[index]};
    console.log(this.editStudentDetails);
  }

  submitEdit() {
    let index = this.students.findIndex((student)=>student.id == this.editStudentDetails.id);
    this.students[index] =  this.editStudentDetails;
    this.editStudentDetails = {name : "",id : 0,branch : ""};
  }

  addStudent(id : any,name : any,branch : any) {
    this.students.push({id : id.value,name : name.value, branch : branch.value});
  }
}
