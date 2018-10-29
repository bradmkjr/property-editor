import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Note } from '../_models';

@Injectable({ providedIn: 'root' })
export class NoteService {
    constructor(private http: HttpClient) { }

    getAll(offset,perPage) {
      // $ curl -X OPTIONS -i http://demo.wp-api.org/wp-json/wp/v2/posts
      const baseURL = 'https://dev.tomsmithlandandhomes.com';
      const url = baseURL+'/wp-json/wp/v2/notes?per_page='+perPage+'&orderby=date&order=desc&offset='+offset;
      return this.http.get<any[]>(url);
    }
}
