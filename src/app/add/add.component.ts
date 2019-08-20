import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  arr:any;
  item;

  constructor(private router:Router,
    private http:HttpClient) { }
  
  goToPage(){
   this.router.navigateByUrl("view");
 }

  ngOnInit() {

    if(!!localStorage && !!localStorage.arr)
    {
      this.arr=JSON.parse(localStorage.arr);
    }
   
  }

  
    check(){
      this.http.get('http://localhost:1234/addItem?item=' + this.item + '&user='+sessionStorage.getItem('user'))
      .subscribe(res=>{
        console.log('Adding  result:', res);
        if(res['status']=='ok'){
          this.item='';
        }
      });
    }

    logout(){
      this.router.navigateByUrl("login");
      sessionStorage.clear();
    }

}
