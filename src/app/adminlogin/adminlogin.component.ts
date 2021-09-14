import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



import { ADMIN_LOGIN } from '../serverUrls';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
   public loginmsg="";
  constructor(private http:HttpClient,private router:Router) {

   }

  ngOnInit(): void {
  }

public login(data:any)
{
  console.log(data)
 
  //get example

//var url = ADMIN_LOGIN + "?email="+data.email+"&password="+data.password;
//this.http.get(url).subscribe((response:any)=>
//{
//console.log(response)
//if(response.status)
//this.loginmsg = "Login Success !";
//else
//this.loginmsg = "Login Falid !";
//});

// post example


this.http.post(ADMIN_LOGIN,data).subscribe((response:any)=>
{
console.log(response)
if(response.status)
this.router.navigateByUrl("/adminhome")
else
this.loginmsg = "Login Falid !";
});

}
}
