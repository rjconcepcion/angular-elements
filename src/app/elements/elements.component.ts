import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  constructor() { }

  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  onSubmit(): void {
    console.warn(this.userForm.value);
  }

  ngOnInit() {
  }

}
