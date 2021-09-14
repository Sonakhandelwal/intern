import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ADMIN_CATEGORY } from '../serverUrls';

@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent implements OnInit
 {
  public msg = '';
  public catelist = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadCategory();
  }
  public loadCategory()
  {
    this.http.get(ADMIN_CATEGORY).subscribe((response:any)=>
    {
      console.log("cate",response)
      this.catelist = response;
    });
  }

  public save(title:string)
  {
    this.http.post(ADMIN_CATEGORY,{title:title}).subscribe((response:any)=>
    {
      if(response.status)
      {
        this.msg = "Category Saved !"
        this.loadCategory();
      }
      else
        this.msg = "Category Failed !"  
    });
  }
}
