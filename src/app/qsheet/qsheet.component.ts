import { Component, OnInit } from '@angular/core';
import { SheetService } from '../sheet.service';

@Component({
  selector: 'app-qsheet',
  templateUrl: './qsheet.component.html',
  styleUrls: ['./qsheet.component.css']
})
export class QsheetComponent implements OnInit {
  productData: any;
  productDataFilter: any;

  constructor(private csv: SheetService) { }

  ngOnInit(): void {
    this.csv.getCooker().subscribe(res => {
      this.productData = res
      this.productDataFilter = res
      console.log(this.productData)
    })
  }
}
