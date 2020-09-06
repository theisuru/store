import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    username: string;
    password: string;
    rememberMe: boolean;

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
    }

    public doLogin() {
        this.userService.login(this.username, this.password).subscribe(response => {
            const status = response.status;
            console.log(response);
            if (status) {
                this.router.navigate([this.userService.redirectUrl]);
            } else {
                alert('Login failed');
            }
        });
    }

}
