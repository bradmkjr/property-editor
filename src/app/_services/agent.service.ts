import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agent } from '../_models';

@Injectable({ providedIn: 'root' })
export class AgentService {
    constructor(private http: HttpClient) { }

    getAll() {
    	// $ curl -X OPTIONS -i http://demo.wp-api.org/wp-json/wp/v2/posts

        return this.http.get<any[]>('https://dev.tomsmithlandandhomes.com/wp-json/wp/v2/agents?per_page=100');
    }
}
