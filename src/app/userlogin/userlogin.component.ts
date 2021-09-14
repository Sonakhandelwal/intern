import { Component, OnInit } from '@angular/core';

import { USER_REGISTER ,USER_LOGIN } from '../serverUrls';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit 
{
  public regmsg = "";
  public loginmsg ="";
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

public login(frmldata:any)
{
  this.http.post(USER_LOGIN,frmldata).subscribe((response:any)=>
  {
      if(response.status){
        this.loginmsg = "Login Success !";
        this.router.navigateByUrl("/")
      }else
      {
        this.loginmsg = "Login Failed !";
      }
  });

}

  public register(frmdata:any)
  {
    console.log(frmdata)
    this.http.post(USER_REGISTER,frmdata).subscribe((response:any)=>
    {
        if(response.status){
          this.regmsg = "Registeration Success !";
        }else
        {
          this.regmsg = "Registeration Failed !";
        }
    });
  }

}
