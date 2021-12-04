import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  parentForm: FormGroup;

  textToChild: string = '';
  textFromChild: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.parentForm = this.formBuilder.group({
      text: ['']
    })
  }

  sendTextToChild(writtenText: string) {
    this.textToChild = writtenText;
  }

  getDataFromChild(data: string) {
    this.textFromChild = data;
  }
}
