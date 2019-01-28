import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }
  register() {
    console.log(this.model);
    this.authService.register(this.model).subscribe(() => {
      console.log('Registered successfully');
    }, error => {
      console.log(error);
    });
  }

}
