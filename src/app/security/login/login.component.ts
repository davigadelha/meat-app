import { NotificationService } from './../../shared/messages/notification.service';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    })
  }
// console.log(`Bem vindo(a), ${user.name}`),
//  console.log(`Ocorreu um erro ao logar: ${response.error.message}`));
  login() {
    this.loginService.login(this.loginForm.value.email,
                            this.loginForm.value.password)
                    .subscribe(user => this.notificationService.notify(`Bem vindo, ${user.name}`),
                               response => // HttpErrorResponse
                               this.notificationService.notify(response.error.message));
  }

}
