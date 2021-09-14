import { Component, OnInit } from '@angular/core';
import { ADMIN_CATEGORY,SEARCH_PRODUCT,ADD_CART } from '../serverUrls';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  public catelist = [];
  public plist:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadCategory();
  }

  public add(pid:any)
  {
    this.http.post(ADD_CART,{pid:pid}).subscribe(response=>
      {
        alert("Done");
      });
  }

  public search(cate:any)
  {   
    console.log(cate._id)
    this.http.post(SEARCH_PRODUCT,{cid:cate._id}).subscribe((response:any)=>
    {
      this.plist = response;
      console.log(response)
    });
  }

  public loadCategory()
  {
    this.http.get(ADMIN_CATEGORY).subscribe((response:any)=>
    {
      console.log("Cte :: ", response)
      this.catelist = response;
    });
  }

}
