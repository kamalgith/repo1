import { Component, OnInit,Input } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    private http:HttpClient) { 
      
    }
username;
password;
public msg:boolean=false;
public msgBody:string;

  check(){
    
    this.http.get('http://localhost:1234/login?username='+this.username +'&password='+this.password).subscribe(res=>{
      console.log('login data', res);
      if (res['status']=='ok'&& res['data'].length>0){
        sessionStorage.setItem('user',this.username);

        this.username='';
        this.password='';
        this.router.navigateByUrl("add");
        
      }
      else{
        this.msg=true;
        this.msgBody="Please Check Your Details Or SignUP !!!";
      }
    
  });
}
  
  goToPage(){
    this.router.navigateByUrl("signup");
  }

  reset(){
    if(this.username!='' && this.password!='')
    this.username='';
    this.password='';
  }

  
  

  ngOnInit() {
  }

}
