import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

import { Post } from '../_models';
import { PostService } from '../_services';

import { Agent } from '../_models';
import { AgentService } from '../_services';



@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    users: User[] = [];

    posts: any[] = [];

    agents: any[] = [];

    constructor(
    	  private userService: UserService,
    	  private postService: PostService,
          private agentService: AgentService,
    	) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            console.log(users);
            this.users = users;
        });

        this.postService.getAll().pipe(first()).subscribe(posts => {
        	console.log(posts);
            this.posts = posts;
        });

        this.agentService.getAll().pipe(first()).subscribe(agents => {
            console.log(agents);
            this.agents = agents;
        });
    }
}