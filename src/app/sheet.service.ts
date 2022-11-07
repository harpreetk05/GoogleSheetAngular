import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SheetService {


  constructor(private http: HttpClient) { }

public getCooker(): Observable<any> {
  const url = `https://docs.google.com/spreadsheets/d/1fq-j3mrHOmjCXpoe9OSrXyOeR3b9DDf1qK08e_7_t9I/gviz/tq?tqx=out:json&tq&gid=0`;
  console.log("sss",url);
  return this.http.get(url);
}
}
// export class SheetComponent implements OnInit {
//   productData: any = []
//   productDataFilter: any;
//   constructor(private csv: SheetService, private http: HttpClient) { }
//   ngOnInit(): void {
//     this.csv.getCooker().subscribe(res => {
//       console.log(“res”, res);
//       // this.productData = JSON.stringify(res);
//       this.productData = this.productData.split(“*/“)[1]
//       // this.productDataFilter= JSON.parse(this.productData)
//      // this.productDataFilter = JSON.parse(res)
//       console.log(“exel data:“,this.productData)
//     },((err: any) => {
//       console.log(“err”, err.error.text);
//       this.productData = err.error.text;
//       var from = this.productData.indexOf(“{”);
//       var to = this.productData.lastIndexOf(“}”) + 1;
//       var jsonText = this.productData.slice(from, to);
//       var parsedText = JSON.parse(jsonText);
//       console.log(“parsedText”,parsedText)
//     }))
//   }
// }
