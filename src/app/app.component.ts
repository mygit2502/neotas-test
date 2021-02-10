import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'neotas-test';
  ids: string = 'tt0371746';
  filter: string = '';
  tableData = [];
  details = null;

  constructor( private _appService: AppService){

  }

  openDetails(index){
    this.details = this.tableData[index];
  }

  markAsFav(eve, index){
    eve.stopPropagation();
    if(this.tableData[index]['fav']){
      this.tableData[index]['fav'] = false;
    }else{
      this.tableData[index]['fav'] = true; 
    }
    debugger
  }

  changeId(){
    this.getSearchById();
  }

  getSearchById(){
    this.tableData = [];
      const idArr = this.ids.split(',');
      idArr.forEach( item => {
        this.getList(item.trim());
      })
  }

  searchTitle(){
    if(this.filter.length > 0){
      this.getListBySearch();
    }else{
      this.getSearchById();
    }
  }

  ngOnInit(): void {
      this.getList(this.ids);
  
  }

  getList(id){
    this._appService.getList(id).subscribe(
      res => {
        if(res && res['Response'] == 'True'){
          this.tableData.push(res);
        }
      },
      err => {

      }
    )
  }
  getListBySearch(){
    this._appService.getListBySearch(this.filter).subscribe(
      res => {
        this.tableData = [];
        if(res && res['Response'] == 'True'){
          this.tableData.push(res);
        }
      },
      err => {

      }
    )
  }
}
