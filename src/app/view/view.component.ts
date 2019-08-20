import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  arr: any;

  constructor(private router:Router,
    private http:HttpClient) { }
  
  goToPage(){
   this.router.navigateByUrl("add");
 }


  ngOnInit() {
    if(!!localStorage && !!localStorage.arr)
    {
      this.arr=JSON.parse(localStorage.arr);
    }
    this.check();
  }

  check(){
    this.http.get('http://localhost:1234/viewItem?user='+sessionStorage.getItem('user')).subscribe(res=>{
      console.log('view result:', res);
      if(res['status']=='ok'){
        this.arr=res['data'];
      }
    });
    
  }

  logout(){
    this.router.navigateByUrl("login");
    sessionStorage.clear();
  }

  deleteItem(item) {
    this.http.get('http://localhost:1234/deleteItem?user=' + sessionStorage.getItem('user') + '&item='+item)
      .subscribe(res => {
        console.log('delete result:', res);
        if (res['status'] == 'ok') {
          this.check();
          console.log(item+' deleted successfully !!!');
        }
        else{
          console.log(item+' not deleted !!!')
        }
      }
      );
  }

}
