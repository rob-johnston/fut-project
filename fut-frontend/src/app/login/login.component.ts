import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { FutLoginService } from './fut-login.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FutLoginService]

})
export class LoginComponent implements OnInit {

  name: string;
  password: string;
  fut: FutLoginService;
  loggedIn: boolean = false;
  app: AppComponent;

  public loginForm = new FormGroup({
    email: new FormControl("email",Validators.required),
    password: new FormControl("password",Validators.required),
    code: new FormControl("code")
  });


  constructor(public fb: FormBuilder, futLogin : FutLoginService, appComponent: AppComponent) {
    this.fut = futLogin;
    this.app = appComponent;
  }

  doLogin(event){
    console.log(event);
    this.fut.login(this.loginForm.value).subscribe(data => {
       console.log(data);
       if(data.loginResult=="true"){
         this.loggedIn = true;
         this.app.loggedIn = true;
       } else {
         this.loggedIn = false;
         this.app.loggedIn = false;
       }
     });
  }

  ngOnInit() {

  }
}
