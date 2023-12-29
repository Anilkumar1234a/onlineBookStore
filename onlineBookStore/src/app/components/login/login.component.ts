import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { User } from '../../user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host: { 'ngSkipHydration': '' }
})
export class LoginComponent implements OnInit{

  user:User =new User();
  userForm: FormGroup;
  alertMessage: string | null = null;
  alertType: 'success' | 'error' | null = null;

  constructor(private fb: FormBuilder,private loginservice:LoginService, private router: Router){}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  
  userLogin() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.loginservice.loginUser(this.userForm.value).subscribe(
        (data) => {
          alert('Login Successfully');
          this.router.navigate(['/dash']);
         
        },
        (error) => {
          this.showAlert('Sorry, please enter valid details', 'error');
    
        }
      );
    } else {
      this.showAlert('Please fill in all fields.', 'error');
    }
  }

  private showAlert(message: string, type: 'success' | 'error') {
    this.alertMessage = message;
    this.alertType = type;
    setTimeout(() => {
      this.alertMessage = null;
      this.alertType = null;
    }, 5000); // Hide the alert after 5 seconds
  }
}

  