import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  searchInput: FormControl = new FormControl();

  constructor() {
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(
      value => this.onChanges(value)
    );
  }

  ngOnInit() {
  }

  onChanges(value: string) {
    console.log('查询后台数据;' + value);
  }

}
