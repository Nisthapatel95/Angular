import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public default_size = 100
  public fontsize: number;

  constructor() {
    this.fontsize = this.default_size;
  }

  ngOnInit(): void {
  }

  getvalue(type: string) {

    this.fontsize = (type === 'increase') ? this.fontsize + 10 : this.fontsize - 10;

  }
}
