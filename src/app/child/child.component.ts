import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() myInputText: string = '';
  @Output() myOutputText: EventEmitter<string> = new EventEmitter();

  childForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.childForm = this.formBuilder.group({
      text: ['']
    })
  }

  ngOnInit(): void {
  }

  sendTextToParent(writtenText: string) {
    this.myOutputText.emit(writtenText);
  }

}
