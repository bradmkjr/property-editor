import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  @Input() property: any;

  editing: boolean = false;
  lines: string[];

  constructor() { }

  ngOnInit() {
  	if( undefined !== this.property ){
      this.lines = this.property.clean_excerpt.split('\n');
    }
  }

  onEdit(){
  	this.editing = true;
  }

  onSave(){
    if( undefined !== this.property ){
      this.lines = this.property.clean_excerpt.split('\n');
    }
  	this.editing = false;
  }

}
