import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Note } from '../_models';
import { NoteService } from '../_services';

@Component({templateUrl: 'home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {
notes: any[] = [];
loading: boolean;
more: boolean = true;
offset: number = 0;
perPage: number = 24;

constructor(
  private noteService: NoteService,
) {}

ngOnInit() {
  this.loading = true;
  this.noteService.getAll( this.offset,this.perPage ).pipe(first()).subscribe(notes => {
    this.notes = notes;
    this.loading = false;
  });
}

loadMore(){
  this.loading = true;
  this.offset = this.offset + this.perPage;
  this.noteService.getAll( this.offset,this.perPage ).pipe(first()).subscribe(newNotes => {
  	  if( newNotes.length < this.perPage){
  	  	this.more = false;
  	  }
      this.notes = this.notes.concat( newNotes );
      this.loading = false;
  });
}

}
