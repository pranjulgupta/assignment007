import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-currencygenrate',
  templateUrl: './currencygenrate.component.html',
  styleUrls: ['./currencygenrate.component.css']
})
export class CurrencygenrateComponent implements OnInit {

  constructor(private http:HttpClient) { }
name;
cname=[];
cvalue=[];
inputname;
inputvalue;
cnames1;
cnames2;
name1;
j;
k;
inputname1;
url="https://exchangeratesapi.io/api/latest";
  ngOnInit() {this.http.get(this.url).subscribe((data:any) =>{
    console.log(data)
    this.cname=Object.keys(data.rates);
  this.cvalue=Object.values(data.rates); 

  });
  
}
getcountryname()
{

  this.inputvalue=this.name;
  this.inputname=this.cnames1;
  this.inputname1=this.cnames2;
for(let i=0;i<=this.cname.length;i++)
{
  console.log(this.cname.length)
 
  if(this.inputname==this.cname[i])
    { 
      this.j=i;
      console.log(this.j)
      if(this.j==32)
      {
        this.j=0;
      }
      break; 
    }
    
}
for(let i=0;i<=this.cname.length;i++)
{
  
  if(this.inputname1==this.cname[i])
     {
        this.k=i;
        console.log(this.k)
        if(this.k==32)
        {
          this.k=0;
        }
        break; 
    }
    
}

  this.name1=this.inputvalue*this.cvalue[this.k]/this.cvalue[this.j];  
  console.log(this.inputvalue)
  console.log(this.cvalue[this.k])
  console.log(this.cvalue[this.j])
  console.log(this.name1)
}

}