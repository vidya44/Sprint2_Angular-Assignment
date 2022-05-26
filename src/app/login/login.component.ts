
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter();
  public k=false
  public username:any
  constructor(private router:Router) {}

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
  })
  loginUser(data:any){
    console.warn(this.loginForm.value);
    if(data.user == data.password)
    {
      this.k=true;
      this.username=data.user
      this.newItemEvent.emit(this.k)
    }
    else{
      alert("Not Matched.")
    }
  }
  get user(){
    return this.loginForm.get('username')
  }
  get password(){
    return this.loginForm.get('password')
  }
}