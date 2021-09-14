import { Component, OnInit } from '@angular/core';
import { ADMIN_CATEGORY , PRODUCT_UPLOAD_PIC, ADMIN_PRODUCT } from '../serverUrls';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent implements OnInit {

  public msg = ''
  public catelist = [];
  public plist = []

  private fileToUpload : any = null;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadCategory();
    this.loadProduct();
  }

  handleChangePic(evt:Event) 
  {
    var files:any = (<HTMLInputElement>evt.target).files;
    //files: FileList
    this.fileToUpload = files.item(0);
  }

  upload(pid:string)
  {   
    //alert(pid)
    if(this.fileToUpload==null)
      alert('Please Select Image First !');
    else 
    {  
      const formData: FormData = new FormData();
      formData.append('product_image', this.fileToUpload, this.fileToUpload.name);
      formData.append('pid',pid);    

      this.http.post(PRODUCT_UPLOAD_PIC, formData).subscribe((response:any)=>
      {
          if(response.status)
          {
            // response.filename
          }
      });
      this.fileToUpload = null;
    }
  }


  public loadCategory()
  {
    this.http.get(ADMIN_CATEGORY).subscribe((response:any)=>
    {
      console.log("Cte :: ", response)
      this.catelist = response;
    });
  }

  public loadProduct()
  {
    this.http.get(ADMIN_PRODUCT).subscribe((response:any)=>
    {      
      this.plist = response;
    });
  }

  public save(frmdata:any)
  {
    this.http.post(ADMIN_PRODUCT,frmdata).subscribe((response:any)=>
    {
      if(response.status)
      {
        this.msg = "Product Saved !"    
        this.loadProduct()    
      }
      else
        this.msg = "Product Failed !"  
    });
  }

}
