import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/service/api.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

    data:any[] = [];

    public tableData1: TableData;
    

  constructor(private apiService: ApiService) { }

  llenarData() {
    this.apiService.getData().subscribe( data => {
        this.data = data.results;
        this.tableData1.dataRows = this.data.map(item => [item.gender, item.name.first, item.name.last, item.location.city, item.phone]);
        console.log(this.data)
    })
  }

  
  ngOnInit():void {
    this.llenarData();
      this.tableData1 = {
          headerRow: [ 'Gender', 'First Name', 'Last Name', 'City', 'Phone'],
          dataRows: []
      };
      
  }


}