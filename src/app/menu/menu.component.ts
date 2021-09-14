import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CHECK_SESSION, LOGOUT } from '../serverUrls';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 public islogin=false;
 public usertype ="";

  constructor(private http:HttpClient,private router:Router)
  { 
     console.log("Constructor : ",http)
  }

public logout()
{

this.http.get(LOGOUT).subscribe((response:any)=>
  {
this.islogin = false;
this.usertype = '';
this.router.navigateByUrl("/")
})
}

  ngOnInit(): void {
    console.log("Constructor : ",this.http)
    setInterval(()=>{
      this.http.get(CHECK_SESSION).subscribe((response:any)=>
      {
        this.islogin = response.status;
        if(this.islogin)
        this.usertype = response.info.type;
      })
    },1000);
  }

}
