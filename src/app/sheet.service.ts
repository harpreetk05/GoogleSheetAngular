import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private http: HttpClient) { }

public getCooker(): Observable<any> {
  const id = "1fq-j3mrHOmjCXpoe9OSrXyOeR3b9DDf1qK08e_7_t9I"
  const url = `https://docs.google.com/spreadsheets/d/1fq-j3mrHOmjCXpoe9OSrXyOeR3b9DDf1qK08e_7_t9I/gviz/tq?tqx=out:json&tq&gid=0`;
  //https://docs.google.com/spreadsheets/d/1fq-j3mrHOmjCXpoe9OSrXyOeR3b9DDf1qK08e_7_t9I/gviz/tq?tqx=out:json&tq&gid=0
  //https://docs.google.com/spreadsheets/d/1fq-j3mrHOmjCXpoe9OSrXyOeR3b9DDf1qK08e_7_t9I/edit#gid=0
  return this.http.get(url);
}
}
// public getsheet(workbook: ExcelScript.Workbook) {
//   const table = workbook.getWorksheet('link').getTables()[0];

//   const range = table.getRange();

//   let returnObjects: TableData[] = [];
//   if(table.getRowCount() > 0) {
//     returnObjects = returnObjectFromVales(range);
//   }

//   console.log(JSON.stringify(returnObjects));
//   return returnObjects
// }

// public returnObjectFromValues(range: ExcelScript.Range): TableData[]
// }


// function main(workbook: ExcelScript.Workbook): TableData[] {
//   const table = workbook.getWorksheet('WithHyperLink').getTables()[0];

//   const range = table.getRange();

//   let returnObjects: TableData[] = [];
//   if (table.getRowCount() > 0) {
//     returnObjects = returnObjectFromValues(range);
//   }

//   console.log(JSON.stringify(returnObjects));
//   return returnObjects
// }

// function returnObjectFromValues(range: ExcelScript.Range): TableData[] {
//   let values = range.getTexts();
//   let objectArray : TableData[] = [];
//   let objectKeys: string[] = [];
//   for (let i = 0; i < values.length; i++) {
//     if (i === 0) {
//       objectKeys = values[i]
//       continue;
//     }

//     let object = {}
//     for (let j = 0; j < values[i].length; j++) {
//       if (j === 4) {
//         object[objectKeys[j]] = range.getCell(i, j).getHyperlink().address;
//       } else {
//         object[objectKeys[j]] = values[i][j];
//       }
//     }

//     objectArray.push(object as TableData);
//   }
//   return objectArray;
// }

// interface TableData {
//   "Event ID": string
//   Date: string
//   Location: string
//   Capacity: string
//   "Search link": string
//   Speakers: string
// }
