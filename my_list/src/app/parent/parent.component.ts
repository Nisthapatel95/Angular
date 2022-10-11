import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public newarr = ['Nistha', 'yag']
  public child: string[];
  public newchild = ['yag', 'smit']
 
  constructor() {
    this.child = [];
   
  }
  ngOnInit(): void {
  }


  getchild(data: string) {
  
     this.newchild.push(data);
  }
  getValue(data: string) {
    this.newarr.push(data);
    // console.log(data)
  }

}
  
