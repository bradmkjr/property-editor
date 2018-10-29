import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'property-editor';
  loggedIn: boolean = false;

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      // console.log('Logged In');
      this.loggedIn = true;
    }else{
    	// console.log('Logged Out');
    }
  }

}
