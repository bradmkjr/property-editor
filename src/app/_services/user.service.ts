import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>('https://dev.tomsmithlandandhomes.com/wp-json/wp/v2/users');
    }
}
