import { Router } from '@angular/router';
import { User } from './user.model';
import { MEAT_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    user: User;

    constructor(private http: HttpClient, private router: Router) {}

    isLoggedIn(): boolean {
        console.log('isLoggedIn: ' + this.user !== undefined);
        return this.user !== undefined;
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post<User>(`${MEAT_API}/login`,
                            {email: email, password: password})
                    .do(user => this.user = user);
    }

    handleLogin(path: string) {
        this.router.navigate(['/login', path]);
    }
}
