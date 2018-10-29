import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  @Input() property: any[];

  editing: boolean = false;
  lines: string[];

  constructor() { }

  ngOnInit() {
  	// console.log(this.property);
    this.lines = this.property.clean_excerpt.split('\n');
    // console.log(this.lines);
  }

  onEdit(){
  	this.editing = true;
  }

  onSave(){
    this.lines = this.property.clean_excerpt.split('\n');
  	this.editing = false;
  }

}
