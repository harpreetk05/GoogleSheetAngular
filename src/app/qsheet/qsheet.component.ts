import { HttpClient } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { SheetService } from '../sheet.service';

@Component({
  selector: 'app-qsheet',
  templateUrl: './qsheet.component.html',
  styleUrls: ['./qsheet.component.css']
})
export class QsheetComponent implements OnInit {
  @Input() parentData: string | undefined;
  @Output() public childData = new EventEmitter<string>();
  productData: any;
  productDataFilter: any;

  constructor(private csv: SheetService, private http: HttpClient) { }

  ngOnInit(): void {
    //this.childData.emit('Child Data!');

    this.csv.getCooker().subscribe(res => {
      console.log("aaa", res);
      this.productData = this.productData.split("*/")[1]

      console.log("excel data:",this.productData)
    },((err:any) => {
      console.log("err", err.error.text);
      this.productData = err.error.text;
      var from = this.productData.indexOf("{");
      var to = this.productData.lastIndexOf("}") + 1;
      var jsonText = this.productData.slice(from, to);
      var parsedText = JSON.parse(jsonText);
      this.productDataFilter = parsedText;
      console.log("productDataFilter", this.productDataFilter);

      //console.log("parsedText",parsedText);

      //console.log(this.productData);

    }))
  }
}
