import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public username;
  public password;
  public confirm;
  public msg:boolean=false;
  public msgBody:string;

  constructor(private router:Router,
    private http:HttpClient ) { }
  
  goToPage(){
   this.router.navigateByUrl("login");
 }
  ngOnInit() {
  }
  check(){
   if(this.password==this.confirm && this.password!=''){
     this.http.get('http://localhost:1234/signup?username='+this.username+'&password='+this.password).subscribe(res=>{
       console.log(res);
       if(res['status']=='ok'){
         this.msg=true;
         this.msgBody='Signup Successful !!!';
         this.router.navigateByUrl("login");
       }
       else{
         this.msg=true;
         this.msgBody="Signup NOT Successful !!!";
       }
     });
   }
   else{
    this.msg=true;
    this.msgBody="Passwords do not match !!!";
    console.log("Please check your Password!");
   }
  }

  reset(){
    if(this.username!='' && this.password!='' && this.confirm!='')
    this.username='';
    this.password='';
    this.confirm='';
  }


}
