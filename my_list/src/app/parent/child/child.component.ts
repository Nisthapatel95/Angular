import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() myInput: any;
  @Output() myOutput: EventEmitter<string>;

  constructor() {
    this.myOutput = new EventEmitter();
  }

  ngOnInit(): void {
    // console.log(this..myInput);

  }
  myData(data: any) {
    this.myOutput.emit(data);
  }

}
